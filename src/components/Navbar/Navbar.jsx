import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';



const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    }

    return (
        <nav className={` ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="College Logo" className='logo' />

            {/* Hamburger Icon */}
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Menu */}
            <ul className={mobileMenuOpen ? 'mobile-menu-active' : ''}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>HOME</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={closeMobileMenu}>PROGRAM</Link></li>
                <li><Link to='about' smooth={true} offset={-160} duration={500} onClick={closeMobileMenu}>ABOUT US</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={closeMobileMenu}>CAMPUS</Link></li>
                <li><Link to='testimonial' smooth={true} offset={-260} duration={500} onClick={closeMobileMenu}>TESTIMONIALS</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={closeMobileMenu}>CONTACT US</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar