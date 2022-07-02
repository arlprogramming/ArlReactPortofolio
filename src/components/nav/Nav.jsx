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

      <ul  className = {hiddenMenu === '' ? 'nav__menuLeft' : 'slide' }>
        <li className='Link'><Link to="/">Home</Link></li>
        <li className='Link'><Link to="/about">About</Link></li>
        <li className='Link'><Link to="/contact">Contact</Link></li>     
      </ul>

      <ul className='nav__menuRight'>
      <li className='Link'><Link to="/javascript">Javascript</Link></li>
      <li className='Link'><Link to="/reactjs">ReactJS</Link></li>
      <li className='Link'><Link to="/content">Content</Link></li>
        
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