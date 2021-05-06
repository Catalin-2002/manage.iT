import React, {Component} from 'react';

import './CreateNewProject.css';

import DatePicker from 'react-date-picker';

import {Button} from '../Button/Button.js';

import Calendar from '../Calendar/Calendar';

class CreateNewProject extends Component {
    state = {
        selectedFile: null
    }

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0] });
    }

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);

        //axios.post("api/uploadFile", formData);
    }

    fileData = () => { 
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 

      render() {
        return(
            <div className="background">
                <div className="center">
                    <form>
                        <input
                            className='project-input'
                            name='nume'
                            type='text'
                            placeholder='Project Name'
                        />
                        <input
                            className='project-input'
                            name='shortDescription'
                            type='text'
                            placeholder='Short project description'
                        />
                        <input
                            className='project-input'
                            name='nume'
                            type='text'
                            placeholder='Project Name'
                        />
                        <p>Upload long project description (preferabil pdf)</p>
                        <br /> 
                        <input type="file" onChange={this.onFileChange} /> 
                        <br />

                        <input
                            className='project-input'
                            name='tasks'
                            type='text'
                            placeholder='Write the tasks'
                        />
                        <Button buttonStyle='btn--outline' links=''>Add</Button>

                        <input
                            className='project-input'
                            name='email'
                            type='email'
                            placeholder='Involved people emails'
                        />
                        <Button buttonStyle='btn--outline' links=''>Add</Button>
                        <br />
                        <Calendar />
                    </form>
                    <br />
                    <Button buttonStyle='btn--outline' links=''>Create new Project</Button>
                </div>
                
            </div>
        )}
}

export default CreateNewProject;