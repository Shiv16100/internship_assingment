import "./Programs.css";
import Card from "./Card";
import React from "react";
import AA from "./../../images/AA.png";
import BB from "./../../images/BB.png";
import CC from "./../../images/CC.png";
import DD from "./../../images/DD.png";
import EE from "./../../images/EE.png";
import FF from "./../../images/FF.png";
import GG from "./../../images/GG.png";
import HH from "./../../images/HH.png";
import II from "./../../images/II.png";


const Program = () => {
  const CardData = [
    {
    heading:"Full Stack Web Developer" ,
    img : AA,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"Blockchain Developer" ,
    img : BB,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"Cyber Security" ,
    img : CC,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"Human Resource" ,
    img : DD,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"UI/UX Designer" ,
    img : EE,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"Marketing" ,
    img : FF,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"BCA" ,
    img : GG,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"MCA" ,
    img : HH,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },
  {
    heading:"B.Tech"  ,
    img : II,
    placement:"100% Placement",
    projects:"8+ Projects",
    rating:"4.5/5"
  },

]
const ProgramHeading= ["Tech Programs", "Non Tech Programs", "Undergrad and Postgrad Programs" ]
  return (
    <div id="main-program-div">
        <div>
        <h1 id="heading-program"> {ProgramHeading[0]}</h1>
        <div id="program-heading-rectangle"></div>
        <div id="program-card-container">
          <Card card_data={CardData[0]}></Card>
          <Card card_data={CardData[1]}></Card>
          <Card card_data={CardData[2]}></Card>
        </div>
        </div>
        <div>
        <h1 id="heading-program"> {ProgramHeading[1]}</h1>
        <div id="nontech-heading-rectangle"></div>
        <div id="program-card-container">
          <Card card_data={CardData[3]}></Card>
          <Card card_data={CardData[4]}></Card>
          <Card card_data={CardData[5]}></Card>
        </div>
        </div>
        <div>
        <h1 id="heading-program">{ProgramHeading[2]}</h1>
        <div id="ug-pg-heading-rectangle"></div>
        <div id="program-card-container">
          <Card card_data={CardData[6]}></Card>
          <Card card_data={CardData[7]}></Card>
          <Card card_data={CardData[8]}></Card>
        </div>
        </div>
      
    </div>
  );
};

export default Program;
