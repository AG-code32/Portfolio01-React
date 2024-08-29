import React from 'react'
import './resume.css'
import CV from '../../assets/GY-Dev_ver02.pdf'


const Resume = () => {
  return (
    <>
      <section id='resume'>
        <h5>Let's Meet</h5>
        <h2>Resume</h2>

        <div className="container resume__container">
          <embed src={CV} alt="my resume"/>
        </div>
      </section>
    </>
   )
}

export default Resume