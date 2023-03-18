import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <li>
              {/* <BiCheck className='service__list-icon'/> */}
              <p>I transform your static designs into stunning websites and web applications, optimized to be responsive, accessible and high quality.</p>
            </li>

          </ul>
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
        </article>

        <article className="service">
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
        </article>

      </div>
    </section>
  )
}

export default Services