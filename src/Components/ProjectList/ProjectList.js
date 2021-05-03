import React from 'react';

import './ProjectList.css';

function ProjectList() {
    const activities = ["mere", "pere", "banane" , "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane"
    , "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane"
    , "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane"
    , "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane"
    , "banane", "banane", "banane", "banane", "banane", "banane", "banane", "banane"];
    const listItems  = activities.map((activity) => 
        <li>{activity}</li>
    );
    return(
        <div className="List">
                <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ProjectList;