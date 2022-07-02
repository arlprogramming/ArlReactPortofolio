import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom";

import './nav.css'

const Nav = () => {
  const [hiddenMenu, setHidden] = useState('')
  
  return (
    <nav>
      <div className="nav__logo">
        <i className='fas fa-mountain'></i>
        <h4>ARL React</h4>
      </div>

      <ul  className = {hiddenMenu == '' ? 'nav__menuLeft' : 'slide' }>
        <li className='Link' as={Link}><a href='/'>Home</a></li>
        <li className='Link' as={Link}><a href='/About'>About</a></li>
        <li className='Link'><a href='/services'>Services</a></li>
        <li className='Link'><a href='/contact'>Contact Us</a></li>
      </ul>

      <ul className='nav__menuRight'>
        <li className='Link'><a href='/javascript'>Javascript</a></li>
        <li className='Link'><a href='/react'>ReactJS</a></li>
        <li className='Link'><a href='/content'>Content</a></li>
        
      </ul>

      <div className="menu__toggle">
        <input type="checkbox" onClick={() => setHidden('slide')}></input>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  )
}

export default Nav