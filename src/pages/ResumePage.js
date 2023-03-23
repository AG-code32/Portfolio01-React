import React from 'react'

import Nav from '../components/nav/Nav'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

import Resume from '../components/resume/Resume'
import ScrollToTop from '../components/scrollToTop/ScrollToTop';




function ResumePage() {
  return (
    <>
      <ScrollToTop />
      <Resume />
      <Nav displayResume={false} navScrollY={500} gapResume='1.8rem'/>
      <Contact />
      <Footer arrowUp={true} arrowDown={false} pageResume={true}/>
    </>
  )
}

export default ResumePage