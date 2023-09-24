import "./GetInTouch.css";
import phone from "./../../images/phone.png";
import email from "./../../images/email.png";

const GetInTouch = () => {
  return (
    <div id="get-n-touch-main-div">
      <div id="first-div">
        <h1>Book <span>One-to-One</span> Consultant with us. </h1>

        <h2>Career corps, Noida, Uttar Pradesh</h2>
        <div id="image-phone" className="icon-get-in-touch">
          <img src={phone}></img>
          <span>+91 8924356264</span>
        </div>
        <div id="image-email" className="icon-get-in-touch">
          <img src={email}></img>
          <span>support@Careercorps.in</span>
        </div>
        <div>
          <div id="top-view-boxes">
            <div id="programs">
              <h1>50+</h1>
              <span>Programs</span>
            </div>
            <div id="partners">
              <h1>100+</h1>
              <span>Hiring Partners</span>
            </div>
            <div id="placement">
              <h1>100%</h1>
              <span>Placement Gaurantee*</span>
            </div>
          </div>
        </div>
      </div>
      <div id="second-div">
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="mob-number">Mobile Number</label>
            <input
              type="number"
              name="mob-number"
              id="mob-number"
              placeholder="Your Mobile Number"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              placeholder="Your Message..."
            ></textarea>
          </div>

          <button>Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
