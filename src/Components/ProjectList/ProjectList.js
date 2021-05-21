import React from 'react';

import './ProjectList.css';

function ProjectList() {
    const activities = ["Project 1", "Project 2"];
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