import React from 'react'
import '../about/aboutme.css'

import Header from '../about/components/header/Header'
import About from '../about/components/about/About'
import Experience from '../about/components/experience/Experience'
import Services from '../about/components/services/Services'
import Portofolio from '../about/components/portofolio/Portofolio'
import Testimonials from '../about/components/testimonials/Testimonials'
import Contact from '../about/components/contact/Contact'
import Footer from '../about/components/footer/Footer'
import Navabout from './components/nav/Navabout'

const Aboutme = () => {
  return (
    <>
        <Header />
        <Navabout />
        <About />
        <Experience />
        <Services />
        <Portofolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default Aboutme