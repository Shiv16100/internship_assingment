import React from 'react'
import './whyChooseCareerCorps.css'
import ProgramsDetails from './Programs_details/ProgramsDetails'
import rectangle from './../../images/Rectangle.png'
import BestsellerCareerDevelopmentPrograms_grid from './bestsellerCareerDevelopmentPrograms_grid/BestsellerCareerDevelopmentPrograms_grid'

import rec1 from './../../images/Rectangle3.png'
import rec2 from './../../images/Rectangle2.png'
import rec3 from './../../images/Rectangle1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';



const WhyChooseCareerCorps = () => {
       return (
              <div>
                     <div id="main_whyChooseCareerCorps">
                            <div id="bestsellerCareerDevelopmentPrograms">
                                   <h1><span>Bestseller</span> Career Development Programs</h1>


                                   {/* <Swiper
                                          slidesPerView={3}
                                          spaceBetween={30}
                                          pagination={{
                                                 clickable: true,
                                          }}
                                          modules={[Pagination]}
                                          className="mySwiper"
                                   >
                                           <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                           <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                            <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                          <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                   </Swiper> */}
                                   <div id="bestsellerCareerDevelopmentPrograms_Programs">
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
                                                 <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                                 <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Blockchain" /></SwiperSlide>
                                                 <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Human Resources" /></SwiperSlide>
                                                 <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                                 <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Blockchain" /></SwiperSlide>
                                                 <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Human Resources" /></SwiperSlide>

                                          </Swiper>

                                   </div>

                                   {/* <div id="bestsellerCareerDevelopmentPrograms_Programs">
                                          <ProgramsDetails img={rectangle} name="Full Stack" />
                                          <ProgramsDetails img={rectangle} name="Blockchain" />
                                          <ProgramsDetails img={rectangle} name="Human Resources" />
                                   </div> */}
                                   <div id="bestsellerCareerDevelopmentPrograms_grid">
                                          <h1>Why choose <br /> <span>Career Corps?</span> </h1>
                                          <BestsellerCareerDevelopmentPrograms_grid img={rec1} name="Placement Guarentee" />
                                          <BestsellerCareerDevelopmentPrograms_grid img={rec2} name="Way of learning" />
                                          <BestsellerCareerDevelopmentPrograms_grid img={rec3} name="Alumni support" />
                                   </div>
                            </div>
                     </div>

              </div>
       )
}

export default WhyChooseCareerCorps
