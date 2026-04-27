import React from 'react'
import img from '../Assets/hero-img.svg' 
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="hero-glow"></div>
      <div className='hero-container'>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for new projects
          </div>
          <h1 className="hero-title">
            Crafting Digital <br />
            <span className="accent-text">Experiences</span> that <br />
            Define the Future
          </h1>
          <p className="hero-description">
            Senior Product Designer & Frontend Architect with 7+ years of experience. 
            I bridge the gap between complex engineering and human-centric design.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Start a Project</button>
            <button className="secondary-btn">View My Work</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">7+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">120+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-container">
            <div className="visual-orbit-1"></div>
            <div className="visual-orbit-2"></div>
            <div className="hero-img-bg"></div>
            <img src={img} alt="Imran Khan" className='hero-img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
