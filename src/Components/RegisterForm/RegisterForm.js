import {React, useState} from 'react';

import './RegisterForm.css';
import manageitLogo from '../../Images/manageitLogo.jpg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function LoginForm() {

  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [confirmPasswordReg, setConfirmPasswordReg] = useState('')
  const [fullNameReg, setfullNameReg] = useState('')
  const [emailStatusReg, setEmailStatusReg] = useState('invalid email address.')

  const [registerStatus, setRegisterStatus] = useState('')

  const register = () =>{
    if (passwordReg == confirmPasswordReg && passwordReg.length > 0 && emailStatusReg.length == 0 && fullNameReg.length > 0){
      Axios.post("http://localhost:3001/register", {
        email: emailReg, 
        password: passwordReg, 
        fullName: fullNameReg
      }).then((response) => {
        console.log(response)
        if (response.data.err) setRegisterStatus(response.data["err"])
        else setRegisterStatus('')
      })
    }
    else if (passwordReg != confirmPasswordReg || passwordReg.length == 0){
        console.log("passwords do not match.")
        setRegisterStatus("passwords do not match")
    }
    else if (emailStatusReg.length > 0){
        console.log(emailStatusReg)
        setRegisterStatus(emailStatusReg)
    }
    else{
        console.log("full name cannot be empty.")
        setRegisterStatus("full name cannot be empty.")
    }
  }

    return(
        <div className="background">
            <div className='center'>
                <form>
                 <input
                    className='register-input'
                    name='fullNameReg'
                    type='text'
                    placeholder='Your full name'
                    onChange = {(e)=>{
                      setfullNameReg(e.target.value)
                    }}
            />
            <br />
            <input
              className='register-input'
              name='emailReg'
              type='email'
              placeholder='Your Email'
              onChange = {(e)=>{
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if ( re.test(e.target.value) && e.target.value.length > 0) {
                   setEmailStatusReg('')
                }
                else {
                    setEmailStatusReg("invalid email address.")
                }
                setEmailReg(e.target.value)
              }}
            />
            <br />
            <input
              className='register-input'
              name='passwordReg'
              type='password'
              placeholder='Your Password'
              onChange = {(e)=>{
                setPasswordReg(e.target.value)
              }}
            />
            <br />
            <input
              className='register-input'
              name='cpasswordReg'
              type='password'
              placeholder='Re-Enter password'
              onChange = {(e)=>{
                setConfirmPasswordReg(e.target.value)
              }}
            />
            <h4 class="registerMessage">{registerStatus}</h4>
            <br />
            <Button buttonStyle='btn--outline'  onClick={register}>Create account</Button>
            <br />
          </form>
    </div>
    </div>
    )
}

export default LoginForm; 