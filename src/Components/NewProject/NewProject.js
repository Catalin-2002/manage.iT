import React from 'react';

import { Button } from '../Button/Button';
import './NewProject.css';

function NewProject() {
    return(
    <div className="newProject">
        <div className="right">
            <form>
                <input
                    className='project-input'
                    name='projectName'
                    type='text'
                    placeholder='Your new Project Name'
                />
            </form>
            <Button buttonStyle='btn--outline' links=''>Create new Project</Button>
        </div>
        
    </div>
    )
}

export default NewProject;