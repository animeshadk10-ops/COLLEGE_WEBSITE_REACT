import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
import heroVideo from '../../assets/hero-background.mp4'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <video src={heroVideo} autoPlay loop muted playsInline className='hero-video'></video>
            <div className='hero-overlay'></div>
            <div className='hero-text'>
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic global landscape.</p>
                <button className='btn'>
                    Explore more <img src={arrow} alt="Arrow" />
                </button>
            </div>
        </div>
    )
}

export default Hero