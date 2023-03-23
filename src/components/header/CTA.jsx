import React from 'react'
import Curriculum from '../../assets/GersonYance-CV-dev.pdf'
import useMediaQuery from './useMediaQuery'
import { BiDownload } from "react-icons/bi";
import { Link } from 'react-router-dom';


const CTA = () => {

  const matches = useMediaQuery('(max-width: 900px)')

  return (
    <div className="cta">
        {matches ? 
        <a href={Curriculum} download className='btn' target="_blank" rel="noreferrer">
          <p>Download CV </p>
          <BiDownload />
        </a> 
        : 
        <Link to='/resume' className='btn'>
          <p>Download CV </p>
          <BiDownload />
          </Link> 
        
        // <a href='/resume' className='btn'>Download CV</a>
        }

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA