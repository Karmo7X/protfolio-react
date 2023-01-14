import React from 'react'
import './Portfolio.css'
import IMG1 from "../../assets/img/project1.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Portfolio Item title</h3>
           <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com' className='btn btn-primary' target="_blank">Dribble</a>
         </div>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Portfolio Item title</h3>
           <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com' className='btn btn-primary' target="_blank">Dribble</a>
         </div>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Portfolio Item title</h3>
           <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com' className='btn btn-primary' target="_blank">Dribble</a>
         </div>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Portfolio Item title</h3>
           <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com' className='btn btn-primary' target="_blank">Dribble</a>
         </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Portfolio Item title</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com' className='btn btn-primary' target="_blank">Dribble</a>
         </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Portfolio Item title</h3>
           <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com' className='btn btn-primary' target="_blank">Dribble</a>
         </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
