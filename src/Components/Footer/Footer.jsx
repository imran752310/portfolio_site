import React from 'react'
import './Footer.css'
import logo from '../Assets/logo-header.svg'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className='display-flex'>
            <div className="col-6">
              <img src={logo} alt="" width={200} />
            </div>
            <div className="col-6">
              <div>
                <p>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
              </div>
            </div>
        </div>
        <div className='icon'>
        <button className='lable'><i className='fa fa-facebook'></i></button>
        <button className='lable'><i className='fa fa-whatsapp'></i></button>
        <button className='lable'><i className='fa fa-instagram'></i></button>
        <button className='lable'><i className='fa fa-twitter'></i></button>
        </div>
      </div>
    </div>
  )
}

export default Footer;