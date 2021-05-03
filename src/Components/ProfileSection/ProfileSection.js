import React from 'react';

import PersonalFields from './PersonalFields';
import PictureDisplay from './PictureDisplay'

import './ProfileSection.css'

function ProfileSection() {
    return (
        <div className="ProfileSection">
              <PictureDisplay></PictureDisplay>
              <PersonalFields></PersonalFields>
        </div>
    )
}

export default ProfileSection
