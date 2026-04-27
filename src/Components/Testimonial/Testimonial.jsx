import React from 'react'
import Testimonial_img from '../Assets/testimonials-img.jpg';
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className='testimonial-section'>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">
              <i className="fa fa-quote-left"></i>
            </div>
            <p className="testimonial-text">
              "Imran's ability to blend technical architecture with high-end design is truly rare. He transformed our vision into a digital product that exceeded our expectations in both form and function."
            </p>
            <div className="testimonial-author">
              <h3>Amman Payne</h3>
              <h5>CEO of Figma</h5>
            </div>
          </div>
          <div className="testimonial-visual">
            <div className="author-img-wrapper">
              <img src="https://mustafatawab.vercel.app/mustafatawabb.png" alt="Amman Payne" />
              <div className="visual-badge">Client Story</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
