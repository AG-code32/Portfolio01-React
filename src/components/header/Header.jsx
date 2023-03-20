import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import useMediaQuery from './useMediaQuery'


const Header = () => {
  
  const matches = useMediaQuery('(max-width: 800px) and (orientation: landscape)')

  const [text] = useTypewriter ({
    words: ['Software Developer','Software Engineer', 'Front-End Developer', 'Back-End Developer', 'Full Stack Developer'],
    loop: 0,
    delaySpeed: 1000,
  });

  return (
  <header id='home'>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      
      {matches ? 
        <p className='header__container-name'>Gerson Yance</p> : 
        <><p className='header__container-name'>Gerson</p>
        <p className='header__container-name'>Yance</p></>
        
        }
      
      
      {/* <p className='header__container-name'>Gerson</p>
      <p className='header__container-name'>Yance</p> */}
      <h5 className="text-light"> <span>{text}</span><Cursor/></h5>
      
      <HeaderSocials />

      {/* <div className="me"> */}
        {/* <img src={ME} alt="me" /> */}
      {/* </div> */}
      <a href="#contact" className='scroll__down'>
        <p>Scroll Down</p>
        <div className='element'></div>
      </a>
      <CTA />

    </div>
  </header>
  )
}

export default Header