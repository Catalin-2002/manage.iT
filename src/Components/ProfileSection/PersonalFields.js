import React from 'react'
import { Button } from '../Button/Button'

function PersonalFields () {
    return (
        <div className="PersonalFields">
                <label className="labelProfile">Full name</label>
                 <input
                    className="inputProfile"
                    name="username"
                    type="text"
                    placeholder="Your full name"
                />
                <br />
                <label className="labelProfile">Email adress</label>
                <input
                    className="inputProfile"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                />
                <br />
                <label className="labelProfile">Telephone</label>
                <input
                    className="inputProfile"
                    name="phone"
                    type="tel"
                    pattern="+[0-9][0-9]{10}"
                />
                <br />
                <label className="labelProfile">Home address</label>
                <input
                    className="inputProfile"
                    name="address"
                    type="text"
                />
                <br />
                <label className="labelProfile">Description</label>
                <textarea 
                    className="inputProfile"
                    rows = "4" 
                    cols = "40"
                    name = "description"
                    placeholder = "enter description"
                />
                <div className="btnModif">
                    <button className="btnSave">Save changes</button>
                    <button className="btnPass">Change password</button>
                </div>
               
        </div>
    )

}

export default PersonalFields
