import React from 'react'

import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import About from '../components/about/About'
import Experiences from '../components/experiences/Experiences'
import Services from '../components/services/Services'
import Portfolio from '../components/portfolio/Portfolio'
// import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

import ScrollToTop from '../components/scrollToTop/ScrollToTop';


function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Nav displayResume={true} navScrollY={3800} gapResume={false}/>
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer arrowUp={false} arrowDown={true}/>
    </>
  )
}

export default HomePage