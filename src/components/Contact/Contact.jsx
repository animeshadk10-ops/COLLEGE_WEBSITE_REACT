import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="Message" /></h3>
        <p>Have questions about our programs, admissions, or campus life? We're here to help! Our admissions team is dedicated to providing you with all the information you need to make an informed decision about your educational journey. Reach out to us, and we'll get back to you promptly.</p>
        <ul>
          <li><img src={mail_icon} alt="Email" />admissions@university.edu</li>
          <li><img src={phone_icon} alt="Phone" />+1 (555) 123-4567</li>
          <li><img src={location_icon} alt="Location" />123 University Avenue, Campus City, ST 12345, United States</li>

        </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label htmlFor="name">Your Name</label>
          <input type="text" name='name' id="name" placeholder='Enter your full name' required />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name='phone' id="phone" placeholder='Enter your phone number' required />
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" rows="6" placeholder='Tell us about your interests and questions' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="Arrow" /></button>
        </form>
        <span></span>
      </div>

    </div>
  )
}

export default Contact