import { useState } from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import Testimonails from "../../../../components/mentorAndStudentTestimonials/testimonails/Testimonails";
import forward_icon from "./../../images/forward_icon.png";
import backward_icon from "./../../images/backward_icon.png";
import Boy from "./../../images/Boy.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import img_testi from '../../../../images/img_testi.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Testimonial = () => {
  const student_info_message = [
    {
      name: "Jheel Tripathi",
      grade: "12th",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: Boy,
    },
    {
      name: "Rahul Kumar",
      grade: "B.Tech",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: Boy,
    },
    {
      name: "Rohan Singh",
      grade: "MBA",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: Boy,
    },
  ];
 const [cradnum, changeCrd]  = useState(0)
  function backHandler(){
      changeCrd(cradnum-1)
  };
  function forHandler(){
    changeCrd(cradnum+1)
};


  let arrOftestcard = [<TestimonialCard student={student_info_message[0]} />,
  <TestimonialCard student={student_info_message[1]} />,
  <TestimonialCard student={student_info_message[2]} />,<TestimonialCard student={student_info_message[0]} />, <TestimonialCard student={student_info_message[1]} />,
  <TestimonialCard student={student_info_message[2]} />]


  return (
    <div id="main-testimonial-div-contact-us">
      <div id="testimonial-heading-rectangle-contact-us"></div>
      <h1>Student Testimonials</h1>
      <div id="testimonial-card-cont">
        {/* <img src={backward_icon} alt="" id="backward-icon" onClick ={backHandler} />

       { arrOftestcard[cradnum] }
       { arrOftestcard[cradnum+1] }
       { arrOftestcard[cradnum+2] }

        <img src={forward_icon} alt="" id="forward-icon"  onClick ={forHandler}/> */}
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
  );
};

export default Testimonial;

