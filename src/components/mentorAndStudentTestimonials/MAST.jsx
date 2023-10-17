import React from 'react'
import './mAST.css'
import Mentors from './mentors/Mentors'
import ment from './../../images/mentor.svg'
import Testimonails from './testimonails/Testimonails'
import img_testi from './../../images/img_testi.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const MAST = () => {
  return (
    <div>
      <div id="main_mAST">
        <div id="mentors_mAST">
          <h1>Growing Network of <span>80+ Mentors</span></h1>
          {/* <div id="horizonatal_scroll_mAST">
                     <Mentors img={ment} name="Prateek Sharma"/>
                     <Mentors img={ment} name="Prateek Sharma"/>
                     <Mentors img={ment} name="Prateek Sharma"/>
                     <Mentors img={ment} name="Prateek Sharma"/>
                     <Mentors img={ment} name="Prateek Sharma"/>
                     <Mentors img={ment} name="Prateek Sharma"/>
              </div> */}


          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]
            }
            // slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400:{
                slidesPerView:1,
              },
              639: {
                slidesPerView: 2,
              },
              865:{
                slidesPerView:2
              },
              1000:{
                slidesPerView:3
              },
              1500:{
                slidesPerView:3
              },
              1700:{
                slidesPerView:4
              }
            }}
            className="mySwiper"
          >
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>
            <SwiperSlide><Mentors img={ment} name="Prateek Sharma" /></SwiperSlide>

          </Swiper>

        </div>
        <div id="studentsTestimonials_mAST">
          <h1>Student <span>Testimonials</span></h1>
          {/* <div id="horizonatal_scroll_testimonials">
            <Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" />
            <Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" />
            <Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" />
          </div> */}
          <div id="horizonatal_scroll_testimonials">
            <Swiper
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView:1,
                },
                639: {
                  slidesPerView: 2,
                },
                865:{
                  slidesPerView:2
                },
                1000:{
                  slidesPerView:3
                },
                1500:{
                  slidesPerView:3
                },
                1700:{
                  slidesPerView:4
                }
              }}
              className="mySwiper"
            >
              <SwiperSlide><Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" /></SwiperSlide>
              <SwiperSlide><Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" /></SwiperSlide>
              <SwiperSlide><Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" /></SwiperSlide>
              <SwiperSlide><Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" /></SwiperSlide>
              <SwiperSlide><Testimonails img={img_testi} name="Jheel Tripathi" class="12th Grade" /></SwiperSlide>

            </Swiper>
          </div>
          <div id='ii'></div>


        </div>
      </div>
    </div>
  )
}

export default MAST
