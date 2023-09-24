import "./TestimonialCard.css";
import Lnkdn from "./../../images/Lnkdn.png";
import Group_185 from "./../../images/Group_185.png";

const TestimonialCard = (props) => {
  const grade = props.student.grade;
  const name = props.student.name;
  const message = props.student.message;
  const stu_image = props.student.image;

  return (
    <div id="student-card">
      <div id="icons">
        <img src={Group_185} alt="image" id="double-qoute-image" />
        <img src={Lnkdn} alt="image" id="linkdin-image" />
      </div>
      <p id="review">{message}</p>
      <div id="student-information">
        <img src={stu_image} alt="image" id="student-image" />
        <div>
          <h2>{name}</h2>
          <p>{grade}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
