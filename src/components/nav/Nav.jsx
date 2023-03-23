import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import useMediaQuery from '../header/useMediaQuery'


const Nav = (resumeNavProps) => {

  const matches = useMediaQuery('(max-width: 600px)')

  const [activeNav, setActiveNav] = useState('#')
  
  
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    // console.log(window.scrollY)
    
    if (matches) {
      if (window.scrollY >= 6702) {
        setNavbar(true)
      }
      else {
        setNavbar(false)
      }
    } else {
      if (window.scrollY >= resumeNavProps.navScrollY) {
        setNavbar(true)
      }
      else {
        setNavbar(false)
      }
    }
  }

  window.addEventListener('scroll', changeBackground)
  
  // console.log(resumeNavProps.gapResume)

  const specialStyle = {
    display: resumeNavProps.displayResume ? 'block' : 'none',
  }
  const navStyle = {
    gap: resumeNavProps.gapResume,
  }

  
  return (
    <nav className={navbar ? 'navbar navActive' : 'navbar' } style={navStyle}>
      
      <div>
        <a href={activeNav} onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <h3>Home</h3>
      </div>
      
      <div style={specialStyle}>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <h3>About</h3>
      </div>
      
      {/* <div>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <h3>Experience</h3>
      </div> */}
      
      <div style={specialStyle}>
        <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <h3>Services</h3>
      </div>
      
      <div style={specialStyle}>
        <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook /></a>
        <h3>Portfolio</h3>
      </div>
      
      <div>
        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        <h3>Contact</h3>        
      </div>

    </nav>
  )
}

export default Nav