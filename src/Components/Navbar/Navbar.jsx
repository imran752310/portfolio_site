import React from 'react'
import './Navbar.css'
import Logo from '../Assets/logo-header.svg'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='nav'>
       <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <li><Link style={{color:"white", textDecoration:'none'}} to='/'>Home</Link></li>
          <li><Link style={{color:"white",textDecoration:'none'}} to='/Portfolio'>Portfolio</Link></li>
          <li><Link style={{color:"white",textDecoration:'none'}} to='/Contact'>Contact</Link></li>
        </ul>
       </div>
        <div className='nav-right'>
        {/* <div><i className='fa fa-dribbble'></i></div> */}
        <button className='lable'><i className='fa fa-dribbble'></i></button>
          <button>Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar;