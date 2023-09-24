import './Footer.css'
import Ellipse_10 from './../../images/Ellipse_10.png';
import Ellipse_11 from './../../images/Ellipse_11.png';
import fotter_icons from  './../../images/fotter_icons.png';


const Footer = () => {
   
    return(
        <div id="main-footer-div">
            <img src={Ellipse_10} id="ellipse-10" /> 
            <img src={Ellipse_11} alt="image is avaible"  id="ellipse-11" /> 
            <div id="heading-footer">
                     <h1>Carrer <span>Corps</span></h1>
            </div>
            <div id="links-footer">
              <div id="about-us-links">
                <h3>Links</h3>
                <p>about</p>
                <p>Courses</p>
                <p>Careers</p>
                <p>Competitions</p>
              </div>
              <div id="contact-us-links">
                <h3>Contact Us</h3>
                <p>
                    Phone: <span>123-456-7890</span>
                </p>
                <p>
                    Address: <span>example address, India</span>
                </p>
              </div>
              <div id="social-links">
              <h3>Social</h3>
                <img src={fotter_icons} alt="" srcset="" />
              </div>
            </div>
            <div id="call-box"> 
            <h2>Subscribe to Newsletter</h2>
                <input type="tel" name="phone-number"  placeholder='Enter your Phone'   /> 
                <button>Book Now</button>
            </div>
            <div id="copyright-info">
              <p>© 2023 Career Corps | All Rights Reserved</p>
            </div>
        </div>

    )
}

export default Footer