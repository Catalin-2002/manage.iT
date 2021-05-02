import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WHERE TEAMS HAVE IT DONE</h1>
      <p>Join now in order to fulfil the final objectives.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('intras aici')}
        >
          WATCH TUTORIAL <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  ); 
}

export default HeroSection;
