import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="Campus" className='about-img' />
        <img src={play_icon} alt="Play video" className='play-icon' />

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>For over three decades, we have been committed to providing transformative education that prepares students for success in an ever-evolving world. Our institution stands as a beacon of academic excellence, innovation, and social responsibility.</p>
        <p>With state-of-the-art facilities, world-class faculty, and a vibrant campus community, we offer an unparalleled educational experience. Our programs are designed to foster critical thinking, creativity, and leadership skills that empower students to make meaningful contributions to society.</p>
        <p>We believe in holistic development—nurturing not just academic prowess, but also character, values, and a global perspective. Join us on a journey of discovery, growth, and excellence that will shape your future and impact the world.</p>

      </div>

    </div>
  )
}

export default About