import React from 'react'
import './details_WTP.css'
import Cariculam from './Cariculam/Cariculam'

import Testimonails from '../../components/mentorAndStudentTestimonials/testimonails/Testimonails';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import growth from './../../images_WTP/growth.png'
import ai from './../../images_WTP/ai.png'
import roadmap from './../../images_WTP/roadmap.png'
import target from './../../images_WTP/target.png'
import brain from './../../images_WTP/brainstorm.png'
import discussion from './../../images_WTP/discussion.png'

import img_testi from './../../images/img_testi.svg'

import certificate from './../../images_WTP/certificate.jpg'
import Mentors_bio from './Mentors_bio/Mentors_bio'

import student from './../../images_WTP/student.png'
import graduation from './../../images_WTP/graduation.png'

const Details_WTP = () => {
  return (
    <div>
      <div className="main_details_WTP">
        <p>Program CURRICULUM</p>
        <h1><span>Industry Ready</span> and Detailed Syllabus</h1>
        <div className="top_div div">
          <img src={student} alt="" />
          <h1>1</h1>
          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="right_div div">
          <h1>2</h1>

          <Cariculam img={ai} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="left_div div">
          <h1>3</h1>
          <Cariculam img={target} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="right_div div">
          <h1>4</h1>

          <Cariculam img={roadmap} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="left_div div">
          <h1>5</h1>
          <Cariculam img={brain} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="bottom_div div">
          <h1>6</h1>
          <Cariculam img={discussion} title="Introduction" details="Analyse past student information for tailored insights using our AI " />
          <img src={graduation} alt="" />
        </div>
        <h1>Earn a <span>Career Certificate</span></h1>
        <div className="certificate_WTP">
          <div className="certificate_WTP_content">
            <h1>Certificate</h1>
            <p>A career studies certificate is not a degree, but rather a program that can</p>
          </div>
          <img src={certificate} alt="" />
        </div>
        <p>Mentors</p>
        <h1>Learn form the <span>best</span></h1>
        <div className="mentors_bio">
          {/* <Mentors_bio/>
          <Mentors_bio/>
          <Mentors_bio/>
          <Mentors_bio/>
          <Mentors_bio/> */}
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
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>

          </Swiper>
        </div>
        <p>Seniors</p>
        <h1>Learn form the <span>best</span></h1>
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


      </div>

    </div>
  )
}

export default Details_WTP
