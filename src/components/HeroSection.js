import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';
import {Link} from 'react-router-dom';

function HeroSection() {
        return (
            <div className='hero-container'>
                <video src="/videos/PC_loop.mp4" autoPlay loop muted />
                <h1>Welcome to Comp-U-Build</h1>
                <p>Join our community forums.</p>
                <div className='hero-btns'>
                    <Button className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>Sign Up</Button>
                     <div className="floater">
                     <Link className='btns btn--outline forum-button' 
                     to="/forum"
                     buttonStyle='btn--primary'
                    buttonSize='btn--large'>Join Forums</Link>
                    </div>
                </div>
            </div>
        );
    }


export default HeroSection;