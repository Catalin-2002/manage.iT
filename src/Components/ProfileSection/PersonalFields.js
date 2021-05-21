import React from 'react'
import { Button } from '../Button/Button'
import Axios from 'axios'
import {useState, useEffect} from 'react'


function PersonalFields () {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')

    useEffect (() =>{
        Axios.get("http://localhost:3001/login").then((response)=>{
          console.log(response)
          if (response.data.loggedIn == true) {
            console.log(response.data.user[0].email)
            setEmail(response.data.user[0].email)
            setFullName(response.data.user[0].full_name)
            setDescription(response.data.user[0].description)
            setAddress(response.data.user[0].address)
          }
          else {
            console.log("no user connected")
          }
        })
      }, [])

    const updateFields = () =>{
        Axios.post("http://localhost:3001/updateFields", {
            email: email, 
            fullName:fullName,
            address:address,
            description:description
          }).then((response) => {
            console.log(response.data)
          })
    }

    return (
        <div className="PersonalFields">
                <label className="labelProfile">Full name</label>
                 <input
                    className="inputProfile"
                    name="username"
                    type="text"
                    placeholder="Your full name"
                    value={fullName}
                />
                <br />
                <label className="labelProfile">Email adress</label>
                <input
                    className="inputProfile"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    readOnly
                />
                <br />
                <label className="labelProfile">Telephone</label>
                <input
                    className="inputProfile"
                    name="phone"
                    type="tel"
                    value={telephone}
                    pattern="+[0-9][0-9]{10}"
                />
                <br />
                <label className="labelProfile">Home address</label>
                <input
                    className="inputProfile"
                    name="address"
                    type="text"
                    value={address}
                />
                <br />
                <label className="labelProfile">Description</label>
                <textarea 
                    className="inputProfile"
                    rows = "4" 
                    cols = "40"
                    name = "description"
                    placeholder = "enter description"
                    value = {description}
                />
                <div className="btnModif">
                    <button className="btnSave">Save changes</button>
                    <button className="btnPass" onClick={updateFields}>Change password</button>
                </div>
               
        </div>
    )

}

export default PersonalFields
