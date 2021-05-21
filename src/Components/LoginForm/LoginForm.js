import React from 'react';

import './LoginForm.css';
import manageitLogo from '../../Images/manageitLogo.jpg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {useState, useEffect} from 'react';

function LoginForm() {
  const [emailLog, setEmailLog] = useState('')
  const [passwordLog, setPasswordLog] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const [loggedIn, setLoggedIn] = useState(false)

  Axios.defaults.withCredentials = true

  const login = () =>{
    Axios.post("http://localhost:3001/login", {
      email: emailLog, 
      password: passwordLog, 
    }).then((response) => {
      console.log(response.data)
      if (response.data.message){
          if (response.data.message == "succes.") 
            window.location.href = '/dashboard'
      }
      setLoginStatus(response.data["message"])
    })
  }

  const logout = () =>{
    Axios.get("http://localhost:3001/logout").then((response)=>{
      console.log(response)
    })
    window.location.reload(false)
  }

  useEffect (() =>{
    Axios.get("http://localhost:3001/login").then((response)=>{
      console.log(response)
      if (response.data.loggedIn == true) {
        console.log(response.data.user[0].email)
        setLoggedIn(true)
      }
      else {
        setLoggedIn(false)
        console.log("no user connected")
      }
    })
  }, [])

    return(
        <div className="background">
    <div className='center'>
          <form>
            {
              !loggedIn &&
              <input
              className='login-input'
              name='email'
              type='email'
              placeholder='Your Email'
              onChange = {(e)=>{
                setEmailLog(e.target.value)
              }}
            />}
            <br />
            {
              !loggedIn && 
              <input
              className='login-input'
              name='password'
              type='password'
              placeholder='Your Password'
              onChange = {(e)=>{
                setPasswordLog(e.target.value)
              }}
            />
            }   
            <br />
            <h4 className="loginMessage">{loginStatus}</h4>
            <br />
            {!loggedIn && <Button buttonStyle='btn--outline' onClick = {login}>Submit</Button>}
            <br />
            <br />
            <Button buttonStyle='btn--outline' links='register'>Don't have an account? Sign Up</Button>
            <br />
            <br/>
            {loggedIn && <Button buttonStyle='btn--outline' onClick = {logout}>Sign Out</Button>}
          </form>
              
    </div>
    </div>
    )
}

export default LoginForm;