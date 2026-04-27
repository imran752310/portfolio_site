import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-glow-1"></div>
          <div className="cta-glow-2"></div>
          <div className="cta-content">
            <h2 className="cta-title">Ready to launch your <br /><span className="accent-text">next big idea?</span></h2>
            <p className="cta-desc">
              I'm currently available for freelance projects and full-time opportunities. Let's create something that stands out.
            </p>
            <div className="cta-actions">
              <Link to="/Contact" className="cta-primary">
                Get Started <i className='fa fa-arrow-right'></i>
              </Link>
              <a href="mailto:hello@imrankhan.design" className="cta-secondary">
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card;
