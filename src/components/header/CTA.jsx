import React from 'react'
import Curriculum from '../../assets/GersonYance-CV-dev.pdf'
import useMediaQuery from './useMediaQuery'


const CTA = () => {

  const matches = useMediaQuery('(max-width: 900px)')

  return (
    <div className="cta">
        {matches ? 
        <a href={Curriculum} download className='btn'>Download CV</a> : 
        <a href='/resume' className='btn'>Download CV</a>}

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA