import React from 'react';

import './LoginForm.css';
import manageitLogo from '../../Images/manageitLogo.jpg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function LoginForm() {
    return(
        <div className="background">
    <div className='center'>
          <form>
            <input
              className='login-input'
              name='username'
              type='text'
              placeholder='Your full name'
            />
            <br />
            <input
              className='login-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <br />
            <input
              className='login-input'
              name='password'
              type='password'
              placeholder='Your Password'
            />
            <br />
            <input
              className='login-input'
              name='cpassword'
              type='password'
              placeholder='Re-Enter password'
            />
            <br />
            <Button buttonStyle='btn--primary'>Submit</Button>
          </form>
    </div>
    </div>
    )
}

export default LoginForm;