import React from 'react'

import { Button } from '../Button/Button';

import './ProfileSection.css'

function PictureDisplay () {
    return (
        <div className="PictureDisplay">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="Image"></img>
            <button className="btnChange">Change picture</button>
        </div>
    )

}

export default PictureDisplay
