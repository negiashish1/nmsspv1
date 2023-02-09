import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules 
import { Pagination, Scrollbar, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/components/pagination/pagination.min.css'
// import 'swiper/modules/pagination.css';

const data = [
  {
    avatar: AVTR1,
    name: 'Goofi Frank',
    review: 'It is such. I can\'t thank my destiny enough for finding me such. sometimes but  and thats the most characteristic.'
  },
  {
    avatar: AVTR2,
    name: 'Sean Jones',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum mollitia quibusdam deserunt pariatur consectetur aut culpa modi quis suscipit natus sint sed, sequi aliquid ex.'
  },
  {
    avatar: AVTR3,
    name: 'Ashish Negi',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum mollitia quibusdam deserunt pariatur consectetur aut culpa modi quis suscipit natus sint sed, sequi aliquid ex.'
  },
  {
    avatar: AVTR4,
    name: 'Reviewer',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum mollitia quibusdam deserunt pariatur consectetur aut culpa modi quis suscipit natus sint sed, sequi aliquid ex.'
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1.5}

        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>


    </section>
  )
}

export default Testimonials