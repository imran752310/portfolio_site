
import React from 'react'
import './Footer.css'
import logo from '../Assets/logo-header.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className="footer-container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <img src={logo} alt="Logo" className='footer-logo' />
            <p className="brand-desc">
              Designing the future, one pixel at a time. High-end digital experiences built with precision and passion.
            </p>
          </div>
          
          <div className="footer-nav">
            
            <div className="nav-group">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="nav-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-newsletter">
            <h4>Join the Newsletter</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="Email Address" />
              <button className="nav-group-btn">Join</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Imran Khan. All rights reserved.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className='fa fa-facebook'></i>
            </a>
            <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="social-icon">
              <i className='fa fa-whatsapp'></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className='fa fa-instagram'></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className='fa fa-twitter'></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;