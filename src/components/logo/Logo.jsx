import React, { useState } from 'react'
import './logo.css'


const Logo = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <a href={activeNav} onClick={()=>setActiveNav('#')} className='logoGY'>
    {/* <a className='logoGY' href="#"> */}
      <img src="./logoGY-Port.svg" alt="logo gerson yance GY white svg" className='logoGY_img'/>
    </a>
  )
}

export default Logo