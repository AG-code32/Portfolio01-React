import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

import { useState } from "react";

import useMediaQuery from '../header/useMediaQuery'


const Footer = (resumeFooterProps) => {

  const query600p = useMediaQuery('(max-width: 600px)')

  const [changeState, setChangeState] = useState('#')

  const [arrowUp, setArrowUp] = useState(false)
  const [arrowDown, setArrowDown] = useState(false)
  const changeBackground = () => {
    
    // console.log(window.scrollY)
    // console.log(arrowUp, arrowDown)
    
    if (query600p) {
      if (window.scrollY >= 700) {
        setArrowUp(false)
        setArrowDown(true)
        if (window.scrollY >= 5700) {
          setArrowUp(false)
          setArrowDown(false)
          if (window.scrollY >= 6382) {
            setArrowUp(true)
            setArrowDown(false)
          }
        }
      }
      
      else {
        setArrowUp(false)
        setArrowDown(false)
      }
    } else {
      if (window.scrollY >= 580) {
        // setArrowUp(false)
        // setArrowDown(true)
        setArrowUp(resumeFooterProps.arrowUp)
        setArrowDown(resumeFooterProps.arrowDown)
        if (window.scrollY >= 3300) {
          setArrowUp(false)
          setArrowDown(false)
          if (window.scrollY >= 3800) {
            setArrowUp(true)
            setArrowDown(false)
          }
        }
      }
      else {
        setArrowUp(false)
        setArrowDown(false)
      }
    }
  }
  
  const style__footerArrowUp = {
    transform: arrowUp ? 'translateY(-1rem)' : 'translateY(12rem)',
    opacity: arrowUp ? '1': '0',
  }
  const style__footerArrowDown = {
    transform: arrowDown ? 'translateY(-1rem)' : 'translateY(12rem)',
    opacity: arrowDown ? '1': '0',
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <footer>
      <a href={changeState} onClick={()=>setChangeState('#')} className='footer__logo'>Gerson|Yance</a>

      <ul className="permalinks">
        <li><a href={changeState} onClick={()=>setChangeState('#')}>Home</a></li>
        <li><a href={changeState} onClick={()=>setChangeState('#about')}>About</a></li>
        <li><a href={changeState} onClick={()=>setChangeState('#experience')}>Experience</a></li>
        <li><a href={changeState} onClick={()=>setChangeState('#services')}>Services</a></li>
        <li><a href={changeState} onClick={()=>setChangeState('#portfolio')}>Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href={changeState} onClick={()=>setChangeState('#contact')}>Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        
        <a href="https://facebook.com/gerson.yance" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/gersonyance" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
        <a href="https://wa.link/096lxa" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        {query600p ? 
        <small>Created by &copy; Gerson Yance all rights reserved 2023.</small>
        : 
        <small>This project was Built in <FaReact /> and created by &copy; Gerson Yance all rights reserved 2023.</small>
        }
        
        
      </div>

      <a 
        href={changeState}
        onClick={()=>setChangeState('#')}
        className='footer__arrow arrow__up show__arrow'
        style={style__footerArrowUp}>
        <BsArrowUp />
      </a>
      <a 
        href={changeState}
        onClick={()=>setChangeState('#contact')}
        className='footer__arrow arrow__down show__arrow'
        style={style__footerArrowDown}>
        <BsArrowDown />
      </a>

    </footer>
  )
}

export default Footer