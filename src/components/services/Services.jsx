import React from 'react'
import './services.css'

import { motion } from 'framer-motion'
import { useState } from 'react';

const Services = () => {

  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  // console.log(setIsOpen)

  return (
    <section id='services'>


      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        
        <article className="service">
          <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsOpen0(!isOpen0)}
            className='service__head'>
            <motion.h3 layout='position'>UI/UX Design</motion.h3>
            {isOpen0 && (
              <motion.div className='service__list'>
                <p>We transform your static designs into stunning websites and web applications, optimized to be responsive, accessible and high quality.</p>
              </motion.div>
            )}
          </motion.div>
        </article>
        
        <article className="service">
          <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsOpen1(!isOpen1)}
            className='service__head'>
            <motion.h3 layout='position'>Web Development</motion.h3>
            {isOpen1 && (
              <motion.div className='service__list'>
                <p>Specialized in the development of web sites and applications, providing a comprehensive service from the beginning to the end of a project.</p>
              </motion.div>
            )}
          </motion.div>
        </article>
        
        <article className="service">
          <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsOpen2(!isOpen2)}
            className='service__head'>
            <motion.h3 layout='position'>Analisys of Requirements</motion.h3>
            {isOpen2 && (
              <motion.div className='service__list'>
                <p>Collect and understand all user requirements, in order to identify their needs and develop solutions.</p>
              </motion.div>
            )}
          </motion.div>
        </article>
        
        <article className="service">
          <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsOpen3(!isOpen3)}
            className='service__head'>
            <motion.h3 layout='position'>WPO</motion.h3>
            {isOpen3 && (
              <motion.div className='service__list'>
                <p>Optimize the performance of web sites and applications to optimize their loading time and improve their response. Guaranteed user experience.</p>
              </motion.div>
            )}
          </motion.div>
        </article>
        
        <article className="service">
          <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsOpen4(!isOpen4)}
            className='service__head'>
            <motion.h3 layout='position'>SEO</motion.h3>
            {isOpen4 && (
              <motion.div className='service__list'>
                <p>Optimize your web sites and applications to improve their position in search engines.</p>
              </motion.div>
            )}
          </motion.div>
        </article>
        
        <article className="service">
          <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsOpen5(!isOpen5)}
            className='service__head'>
            <motion.h3 layout='position'>Web Hosting</motion.h3>
            {isOpen5 && (
              <motion.div className='service__list'>
                <p>Don't have a domain and web hosting for your project?<br />No problem, we can also assist and solve all your doubts.</p>
              </motion.div>
            )}
          </motion.div>
        </article>
        
        
{/*         
        
        <article className="service">
          <div className="service__head">
            
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__list">

            <li>
              <p>I transform your static designs into stunning websites and web applications, optimized to be responsive, accessible and high quality.</p>
            </li>

          </div>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>I am specialized in the development of web sites and applications, providing a comprehensive service from the beginning to the end of a project.</p>      
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Analisys of Requirements</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Collect and understand all user requirements, in order to identify their needs and develop solutions.</p>      
            </li>
          </ul>
        </article> */}

        {/* <article className="service">
          <div className="service__head">
            <h3>WPO</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Optimize the performance of web sites and applications to optimize their loading time and improve their response. Guaranteed user experience.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>SEO</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Optimize your web sites and applications to improve their position in search engines.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Hosting</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Don't have a domain and web hosting for your project?<br />No problem, we can also assist and solve all your doubts.</p>
            </li>
          </ul>
        </article> */}

      </div>
    </section>
  )
}

export default Services