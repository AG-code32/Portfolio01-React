import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/gerson-yance-patricio" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/AG-code32" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://wa.link/096lxa" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials