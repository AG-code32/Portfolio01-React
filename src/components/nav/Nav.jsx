import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import { useState } from "react";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 3800) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'navbar navActive' : 'navbar' }>
      
      <div>
        <a href={activeNav} onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <h3>Home</h3>
      </div>
      
      <div>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <h3>About</h3>
      </div>
      
      {/* <div>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <h3>Experience</h3>
      </div> */}
      
      <div>
        <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <h3>Services</h3>
      </div>
      
      <div>
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