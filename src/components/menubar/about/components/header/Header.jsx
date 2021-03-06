import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className='about__header'>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h2>Rullyansyah Oetama</h2>
        <h5 className="text-light">Frontend ReactJS</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header