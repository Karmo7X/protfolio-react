import React from 'react'
import "./Testimonials.css"
 import AVTR1 from "../../assets/img/avatar1.jpeg"
 import AVTR2 from "../../assets/img/avatar1.jpeg"
 import AVTR3 from "../../assets/img/avatar1.jpeg"
 import AVTR4 from "../../assets/img/avatar1.jpeg"

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data =
[

{ avatar: AVTR1,
  name:'jon Snow',
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore architecto quia velit sapiente laborum tenetur provident similique debitis sunt? Aspernatur placeat voluptate aperiam laudantium similique eius optio sed inventore."
},

{ avatar: AVTR2,
  name:'leo MESSi ',
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore architecto quia velit sapiente laborum tenetur provident similique debitis sunt? Aspernatur placeat voluptate aperiam laudantium similique eius optio sed inventore."
},
{ avatar: AVTR3,
  name:'Snow AR ',
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore architecto quia velit sapiente laborum tenetur provident similique debitis sunt? Aspernatur placeat voluptate aperiam laudantium similique eius optio sed inventore."
},
{ avatar: AVTR4,
  name:'Cristiano Ronaldo',
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore architecto quia velit sapiente laborum tenetur provident similique debitis sunt? Aspernatur placeat voluptate aperiam laudantium similique eius optio sed inventore."
},

] 







const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Client</h5>
      <h2>Testimomials</h2>
      
       <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
      
       >
         
        

        {
          data.map(({avatar,name,review}, index) =>
          {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
          </Swiper> 
    </section>
  )
}

export default Testimonials
