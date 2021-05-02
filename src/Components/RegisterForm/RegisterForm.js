import React from 'react';

import './RegisterForm.css';
import manageitLogo from '../../Images/manageitLogo.jpg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function LoginForm() {
    return(
        <div className="background">
            <div className='center'>
                <form>
                 <input
                    className='register-input'
                    name='username'
                    type='text'
                     placeholder='Your full name'
            />
            <br />
            <input
              className='register-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <br />
            <input
              className='register-input'
              name='password'
              type='password'
              placeholder='Your Password'
            />
            <br />
            <input
              className='register-input'
              name='cpassword'
              type='password'
              placeholder='Re-Enter password'
            />
            <br />
            <Button buttonStyle='btn--outline' links='sign-up'>Create account</Button>
            <br />
          </form>
    </div>
    </div>
    )
}

export default LoginForm; 