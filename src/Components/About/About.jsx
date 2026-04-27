import React from 'react'
import './About.css'

const skills = [
  { icon: 'fa-pencil-square-o', title: 'Product Design', desc: 'Creating cohesive digital systems.' },
  { icon: 'fa-diamond', title: 'Logo Design', desc: 'Crafting memorable brand identities.' },
  { icon: 'fa-desktop', title: 'UI/UX Design', desc: 'High-fidelity interactive interfaces.' },
  { icon: 'fa-code', title: 'Frontend Dev', desc: 'Clean, performant, and scalable code.' }
]

const About = () => {
  return (
    <section className='about-section'>
      <div className="about-container">
        <div className="about-grid">
          <div className="skills-cards">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-card card-${index}`}>
                <div className="skill-icon">
                  <i className={`fa ${skill.icon}`}></i>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
          
          <div className="about-content">
            <span className="sub-heading">My Expertise</span>
            <h2 className="about-title">Why Hire Me for Your <span className="accent-text">Next Project</span>?</h2>
            <p className="about-desc">
              I specialize in turning complex ideas into elegant digital solutions. With a deep understanding of both design aesthetics and technical architecture, I ensure your product is not only beautiful but also built to scale.
            </p>
            <div className="about-features">
              <div className="feature">
                <i className='fa fa-check-circle'></i>
                <span>Pixel Perfect Precision</span>
              </div>
              <div className="feature">
                <i className='fa fa-check-circle'></i>
                <span>User-Centric Methodology</span>
              </div>
              <div className="feature">
                <i className='fa fa-check-circle'></i>
                <span>Performance Optimized</span>
              </div>
            </div>
            <button className="cv-btn">
              Download Resume <i className='fa fa-download'></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
