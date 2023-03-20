import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FaReact } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Gerson|Yance</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        
        <a href="https://facebook.com/gerson.yance" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/gersonyance" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
        <a href="https://wa.link/096lxa" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>This project was Built in <FaReact /> and created by &copy; Gerson Yance all rights reserved 2023.</small>
      </div>


    </footer>
  )
}

export default Footer