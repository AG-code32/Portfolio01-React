import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

const Header = () => {

const el = useRef(null);
useEffect(() => {
  const typed = new Typed (el.current, {
    // strings: ["Think", "Feel", "Behave", "Learn", "Do"],
    strings: ["Front End", "Developer", "Engineer"],
    // startDelay: 100,
    typeSpeed: 100,
    // backDelay: 150,
    backSpeed: 100,
    // smartBackspace: true,
    showCursor: false,
    loop: true,
  }

  )
})


  return (
  <header id='home'>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Gerson Yance</h1>
      <h5 className="text-light">Software <span ref={el}></span></h5>
      <HeaderSocials />

      {/* <div className="me"> */}
        {/* <img src={ME} alt="me" /> */}
      {/* </div> */}
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      <CTA />

    </div>
  </header>
  )
}

export default Header