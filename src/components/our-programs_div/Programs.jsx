import "./Programs.css";
import ProgramCard from "./ProgramCard";
import forward_icon from './../../images/forward_icon.png';
import backward_icon from './../../images/backward_icon.png';



const Programs = (props) => {
  const headingg = props.heading.main_head;
  const card_information = props.heading.card_info;
  
  return (
    <div id="main-programs-div">
      <h1>{headingg}</h1>
      <div id="rectangle-heading-div"></div>
      <div id="career-page-programs-cards-container">
        <img src={backward_icon} alt=""  />
        <ProgramCard head_1={card_information[0]}/>
        <ProgramCard head_1={card_information[1]} />
        <ProgramCard head_1={card_information[2]} />
        <img src={forward_icon} alt="" />
      </div>
    </div>
  );
};

export default Programs;
