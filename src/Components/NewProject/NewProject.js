import React from 'react';

import { Button } from '../Button/Button';
import './NewProject.css';

function NewProject() {
    return(
    <div className="newProject">
        <div className="right">
            <Button buttonStyle='btn--outline' links='newproject'>Create new Project</Button>
        </div>
        
    </div>
    )
}

export default NewProject;