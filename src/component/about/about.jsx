import React from 'react'
import './About.css'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
const About = () => {
  return (
     <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
       <div className='about__me'>
        <div className='about__me-image'>
          <img src="" alt="" />
        </div>
       </div>
       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small> 3+ years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small> 200+ worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary  className="about__icon"/>
            <h5>Pojects</h5>
            <small> 80+ Completed</small>
          </article>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos labore alias vel voluptates? Quam,
           itaque quas voluptatem esse rem iure nulla facer
          e dignissimos doloremque repellendus asperiores est ipsum ut odit.</p>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
       </div>
      </div>
     </section>
  )
}

export default About
