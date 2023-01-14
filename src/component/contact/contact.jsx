import React from 'react'
import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';



    


const Contact = () => {
const form=useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m7jp3ne', 'template_k8gg3a3', form.current, 'Pza9Tya80Jw99lKCt')
       
    e.target.reset()
      };
  return (
       <section id='contact'>
        <h5>GEt in Touch</h5>
        <h2>Contact ME</h2>

        <div className="container contact__container">
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>maxmr343@gmail.com</h5>
              <a href='mailto:maxmr343@gmail.com' target="_blank">send a massege</a>
            </article>

            <article className='contact__option'>
              <AiFillFacebook className="contact__option-icon"/>
              <h4>Facbook</h4>
              <h5>Kareem Azam</h5>
              <a href='https://www.facebook.com/profile.php?id=100013727227321'>send a massege</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp className="contact__option-icon"/>
              <h4>Whatsapp</h4>
              <h5>+201020399241</h5>
              <a href='https://api.whatsapp.com/send?phone=01020499241'>send a massege</a>
            </article>
          </div>

          <form  ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea type="message" name='message' rows="7" placeholder='Your Message'required ></textarea>
            <button type='submit' className='btn btn-primary '>send Message</button>
          
          
          </form>

        </div>


       </section>
  )
}

export default Contact
