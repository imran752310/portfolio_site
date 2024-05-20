import React from 'react'
import img from '../Assets/img.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero header__container '>
    <div className="hero-left">
      <div>
        
        <h2>
        <p>Introducing</p>
            Hello <br />
         I'm Imran <br /> Khan</h2>
        <p>Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products</p>
      </div>
      <div className="hero-latest-btn">
      <button>Contact Me</button>
      </div>
    </div>

    <div className="hero-right">
      
      <div className="container">
      <img src={img} alt="" className='img' />
      </div>
    </div>
  </div>
  )
}

export default Hero