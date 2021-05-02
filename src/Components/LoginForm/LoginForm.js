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
            
            <br />
            <Button buttonStyle='btn--outline'>Submit</Button>
            <br />
            <br />
            <Button buttonStyle='btn--outline' links='register'>Don't have an account? Sign In</Button>
          </form>
    </div>
    </div>
    )
}

export default LoginForm;