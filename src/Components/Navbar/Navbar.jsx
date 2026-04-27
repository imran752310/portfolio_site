import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo-header.svg'
import { Link } from "react-router-dom";
import { useTheme } from '../../ThemeContext';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='nav'>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={isMobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
          <li><Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to='/Portfolio' onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to='/Contact' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
      <div className='nav-right'>
        <div className="theme-switcher">
          <button className="theme-btn" onClick={() => setIsOpen(!isOpen)}>
            {theme === 'light' ? <i className='fa fa-sun-o'></i> : theme === 'dark' ? <i className='fa fa-moon-o'></i> : <i className='fa fa-desktop'></i>}
          </button>
          {isOpen && (
            <div className="theme-dropdown">
              <div className={`theme-option ${theme === 'light' ? 'active' : ''}`} onClick={() => { setTheme('light'); setIsOpen(false); }}>
                <i className='fa fa-sun-o'></i> Light
              </div>
              <div className={`theme-option ${theme === 'dark' ? 'active' : ''}`} onClick={() => { setTheme('dark'); setIsOpen(false); }}>
                <i className='fa fa-moon-o'></i> Dark
              </div>
              <div className={`theme-option ${theme === 'system' ? 'active' : ''}`} onClick={() => { setTheme('system'); setIsOpen(false); }}>
                <i className='fa fa-desktop'></i> System
              </div>
            </div>
          )}
        </div>
        <button className='contact-btn hide-mobile'>Contact Me</button>
        <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
        </button>
      </div>
    </div>
  )
}

export default Navbar;