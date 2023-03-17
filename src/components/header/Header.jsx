import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Header = () => {

  const [text] = useTypewriter ({
    words: ['Software Developer','Software Engineer', 'Front-End Developer', 'Back-End Developer', 'Full Stack Developer'],
    loop: 0,
    delaySpeed: 1000,
  });

  return (
  <header id='home'>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <p className='header__container-name'>Gerson</p>
      <p className='header__container-name'>Yance</p>
      <h5 className="text-light"> <span>{text}</span><Cursor/></h5>
      
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