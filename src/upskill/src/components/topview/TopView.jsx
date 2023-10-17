import "./TopView.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Topview = () => {
  return (
    <div id="main_top-view-career-programs-1">
      <div id="first-part-career-programs-1">
        <div id="ellipce-career-programs-1"></div>
        <h1>
          Upskill <span> Yourself </span>
        </h1>
        <span>
          Programs designed in collaboration with leading industry experts to
          help you develop strong fundamentals.
        </span>
        <button> Go to Programs</button>
      </div>
      <div id="top-view-boxes-career-programs-1">
        <div id="programs-career-programs-1-1">
          <h1>50+</h1>
          <p>Programs</p>
        </div>
        <div id="partners-career-programs-1-2">
          <h1>100+</h1>
          <p>Hiring Partners</p>
        </div>
        <div id="placement-career-programs-1-3">
          <h1>100%</h1>
          <p>Placement Gaurantee*</p>
        </div>
      </div>
    </div>
  );
};

export default Topview;
