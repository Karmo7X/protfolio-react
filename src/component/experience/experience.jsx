import React from 'react'
import './Experience.css'
import  { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
       <section id='experience'>
       <h5>What Skills I Have</h5>
       <h2>MY Experience</h2>

       <div className='container experience__container'>
        <div className='experience__frontend'>
         <h3>Frontend Development</h3>
          <h5>Frontend basics</h5>
       <article className='experience__details'>
        <BsPatchCheckFill/>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
       </article>
       <article className='experience__details'>
        <BsPatchCheckFill/>
        <h4>CSS</h4>
        <small className='text-light'>Intermediate</small>
       </article>
       <article className='experience__details'>
        <BsPatchCheckFill/>
        <h4>Java Script</h4>
        <small className='text-light'>Experienced</small>
       </article>
       
        </div>
        <div className='experience__frontend'>
         <h3>Frontend Development</h3>
         <h5>Frontend Frameworks</h5>
       <article className='experience__details'>
        <BsPatchCheckFill/>
        <h4>Bootstrap</h4>
        <small className='text-light'>Experienced</small>
       </article>
       <article className='experience__details'>
        <BsPatchCheckFill/>
        <h4>React.js</h4>
        <small className='text-light'>Experienced</small>
       </article>
        </div>
        
       </div>
       </section>
  )
}

export default Experience
