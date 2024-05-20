import React from 'react'
import './css/Contact.css'
const Contact = () => {
  return (
    <div>
     <div className="contact">
      <div className="contact_row">
        <div className="contact_col_1">
          <span>Contact Me</span>
          <h1>Get In Touch With Me</h1>
          <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.</p>
        </div>
        <div className="contact_col_2">
         <form action="">
          <div className="flex">
          <input type="text" placeholder='FullName'/>
          <input type="text"  placeholder='Email'/>
          </div>
          <textarea className='text' style={{borderRadius:'20px',background:"#222325",border: "1px solid #64f4ab"}} name="" id="" cols="100" rows="20">Message</textarea>
          <div className="hero-latest-btn"><br /><br />
            <button>Send To me</button>
          </div>
         </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Contact