import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
// import { useRef } from 'react';
// import emailjs from 'emailjs-com';


const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_mgjxp39', 'template_9pr9ijv', form.current, 'PW5t104hvrnZoQOEc')

  //   e.target.reset();

  // };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>g.yance32@gmail.com</h5>
            <a href=
              // 'mailto:g.yance32@gmail.com?subject=Disponibilidad%20de%20Postulante&body=Estimado%20postulante,%20quisieramos%20contar%20con%20usted%20para%20la%20siguiente%20etapa%20de%20la%20postulación%20mediante%20una%20entrevista,%20por%20favor,%20ponte%20en%20contacto%20con%20este%20numero,%20para%20coordinar%20la%20fecha%20y%20hora: "  ".'
              'mailto:g.yance32@gmail.com'
              target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>GersonYance</h5>
            <a href="https://m.me/gerson.yance?" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+51 982656247</h5>
            <a href="https://wa.link/096lxa" target='_blank' rel="noreferrer">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name='message' id='' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>



    </section>
  )
}

export default Contact