import React from 'react'
import CV from '../../assets/GersonYance-CV-dev.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href="/resume" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
    </div>
  )
}

export default CTA