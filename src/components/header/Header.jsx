import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import useMediaQuery from './useMediaQuery'
import { useState } from 'react';


const Header = () => {
  
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };


  const matches = useMediaQuery('(max-width: 800px) and (orientation: landscape)')

  const [text] = useTypewriter ({
    words: ['Software Developer','Software Engineer', 'Front-End Developer', 'Back-End Developer', 'Full Stack Developer'],
    loop: 0,
    delaySpeed: 1000,
  });

  return (
  <header id='home'>
    {/* <div>
      <div className='scroll'>
        Scroll top: <b>{scrollTop}</b>
      </div>
      <div
          style={{
            border: '1px solid black',
            width: '400px',
            height: '200px',
            overflow: 'auto',
          }}
         onScroll={handleScroll}>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
          <p>Hola Mundo</p>
        </div> */}

    {/* <div>
      Scroll top: <b>{scrollTop}</b>
      <br />
      <br />
      <div
        style={{
          border: '1px solid black',
          width: '400px',
          height: '200px',
          overflow: 'auto',
        }}
        onScroll={handleScroll}
      >
        {[...Array(10)].map((_, i) => (
          <p key={i}>Content</p>
        ))}
      </div>
    </div> */}

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
        <div className='element element__right'></div>
      </a>
      <CTA />

    </div>

  {/* </div> */}

  </header>
  )
}

export default Header