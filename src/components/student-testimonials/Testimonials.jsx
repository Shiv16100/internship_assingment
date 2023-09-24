import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import forward_icon from "./../../images/forward_icon.png";
import backward_icon from "./../../images/backward_icon.png";
import Boy from "./../../images/Boy.png";

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

  return (
    <div id="main-testimonial-div">
      <div id="testimonial-heading-rectangle"></div>
      <h1>Student Testimonials</h1>
      <div id="testimonial-card-cont">
        <img src={backward_icon} alt="" id="backward-icon" />

        <TestimonialCard student={student_info_message[0]} />
        <TestimonialCard student={student_info_message[1]} />
        <TestimonialCard student={student_info_message[2]} />

        <img src={forward_icon} alt="" id="forward-icon" />
      </div>
    </div>
  );
};

export default Testimonial;

