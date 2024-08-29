import React from 'react'
import './about.css'
import ME from '../../assets/me4.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className='about__container-me'>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="profile me" />
            </div>
          </div>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

        </div>


        <div className="about__content">

          <p>
          Software Developer, passionate about Front-End and web page development, creating unique websites that provide a dynamic, intuitive and satisfying user experience.
          {/* Software Developer, apasionado por el Front-End y el desarrollo de paginas web, creando sitios web únicos que brindan una experiencia de usuario dinámica, intuitiva y satisfactoria.<br /> */}
          {/* Puedes ver algunos de mis trabajos en la sección de proyectos.<br /><br /> */}
          {/* Persona organizada, solucionadora de problemas, responsable y comprometida con mi trabajo.<br /><br /> */}
          {/* Estoy constantemente aprendiendo nuevas tecnologías y herramientas para mejorar mis habilidades. */}
          {/* Interesado en todo el espectro frontend y trabajando en proyectos ambiciosos con personas positivas. */}
          </p>

          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          
          </div>


          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About