import "./Topview.css";
import Main_Contact_us_Page from "./../../images/Main_Contact_us_Page.png";
import Ellipse_4 from "./../../images/Ellipse_4.png";
import gradient from './../../images/gradient.png';
const Topview = () => {
  return (
    <div id="main-topview-div">
      <img src ={gradient} id="image-div" alt="image" />
        <img src={Main_Contact_us_Page} alt="image" id="top-view-image" />
     

      <div id="heading-contact-us-page">
        <h1>
          Contact Us For Our <span>Best</span> Courses and Placements
        </h1>
        <img src={Ellipse_4}/>
        <button>I'm Intrested</button>
      </div>
    </div>
  );
};

export default Topview;
