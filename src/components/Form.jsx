import "./Form.css";
const Form = () => {
  return (
    <div id="form-main-div">
      <div id="form-heading-div">
        <h1>Boost Your Professional Growth.</h1>
        <p>Interested in joining our courses? Let's talk.</p>
      </div>
      <div id="form-info-box">
        <div>
          <label htmlFor="name">Name*</label>
          <input type="text" name="name" id="name" placeholder="Your Name" required />
        </div>

        <div>
          <label htmlFor="email">Email Address*</label>
          <input type="email" name="email" id="email" placeholder="Your Email Address" required/>
        </div>

        <div>
          <label htmlFor="mobile">Mobile Number*</label>
          <input type="number" name="mobile" id="mobile"  placeholder="Your Mobile Number" minLength={10} required/>
        </div>

        <div>
          <label htmlFor="courses">Choose Course</label>
          <select name="courses" id="courses">
            <option className="jk">Select any one --</option>
            <option value="full stack web developer">Full Stack Web Developer</option>
            <option value="Blockchain developer">Blockchain Developer</option>
            <option value="Cyber Security">Cyber Secrity</option>
            <option value="Human Resource">Human Resource</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Marketing">Marketing</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.Tech">B.Tech</option>
          </select>
        </div>
        {/* <div>
          <label htmlFor="message">Message</label>
          <input type="text" name="message" id="message"  placeholder="Your Message..."/>
        </div> */}

        <div>
        <button id="form-button">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
