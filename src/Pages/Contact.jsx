import React from 'react'
import './css/Contact.css'

const Contact = () => {
  return (
    <section className='contact-section'>
      <div className="contact-container">
        <div className="contact-info">
          <span className="sub-heading">Get in touch</span>
          <h2 className="contact-title">Let's build something <br /><span className="accent-text">extraordinary</span> together.</h2>
          <p className="contact-desc">
            Whether you have a specific project in mind or just want to say hi, my inbox is always open.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-box"><i className='fa fa-envelope'></i></div>
              <div>
                <h4>Email</h4>
                <p>hello@imrankhan.design</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-box"><i className='fa fa-map-marker'></i></div>
              <div>
                <h4>Location</h4>
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="premium-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder='Your Name' />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder='your@email.com' />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder='How can I help you?' rows="5"></textarea>
            </div>
            <button className='submit-btn'>
              Send Message <i className='fa fa-paper-plane'></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
