const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const nodemailer = require('nodemailer')

const bcrypt = require("bcrypt")
const saltRounds = 10

const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))


app.use(session({
    key: "userEmail",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 100 * 60 * 60 * 24 // 24 hours cookie
    }
}))

const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

app.post('/register', (req, res) =>{
    const email = req.body.email
    const password = req.body.password
    const fullName = req.body.fullName

    bcrypt.hash(password, saltRounds,(err, hash) =>{
        if (err){
            console.log(err)
        }
        db.query(
            "INSERT INTO user (email, password, full_name) VALUES (?,?,?)", 
            [email, hash, fullName],
            (err, result) =>{
                if(err) res.send({err: "email address already in use"})
                else {

                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'raduftw01@gmail.com',
                            pass: process.env.EMAILPASS
                        }
                    });

                    var mailOptions = {
                        from: 'raduftw01@gmail.com',
                        to: email,
                        subject: 'Manage.iT account succesfully created!',
                        html: `
                                <h2>Hello ${fullName},</h2>
                                <p>Thank you for registering on Manage.iT. Your accont has been succesfully created.</p>
                                <br/>
                                <a href=http://localhost:3000/sign-in> Click here to sign in and get started.</a>
                                <br/> <br/>
                                <p>Manage.iT team</p>`

                    };

                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                   res.send(result)
                }
            }
        )
    })
    
})

app.get("/login", (req, res) =>{
    if (req.session.user){
        res.send({
            loggedIn: true, 
            user: req.session.user
        })
    }
    else {
        res.send({
            loggedIn: false
        })
    }
})

app.get("/logout", (req, res) =>{
    if (req.session.user){
       req.session.destroy()
    }
    else {
        res.send({
            loggedIn: false
        })
    }
})


app.post('/login', (req, res) =>{
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM user WHERE email = ?;", 
        email,
        (err, result) =>{
            if(err) res.send({err: err})
            else {
                if (result.length > 0){
                    bcrypt.compare(password, result[0].password, (error, response) =>{
                        if (response){
                            req.session.user = result
                            console.log(req.session.user)
                            
                            res.send({result, message: "succes." })
                        }
                        else {
                            res.send({message: "email/password incorrect."})
                        }
                    })
                }
                else{
                    res.send({message: "no user with the given email found."})
                }
            }
        }
    )
})


app.listen(3001, ()=>{
    console.log("Running on 3001.");
})