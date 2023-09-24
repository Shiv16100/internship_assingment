import "./HiringPartners.css";
import Group_204 from "./../../images/Group_204.png";
import Group_205 from "./../../images/Group_205.png";
import Group_206 from "./../../images/Group_206.png";
import Group_207 from "./../../images/Group_207.png";
import Group_208 from "./../../images/Group_208.png";
import Rectangle_632 from "./../../images/Rectangle_632.png";

const HiringPartners = () => {
  let arr1 = [
    Group_204,
    Group_205,
    Group_206,
    Group_207,
    Group_208,
    Group_206,
    Group_208,
    Group_204,
  ];
  let arr2 = [
    Group_205,
    Group_208,
    Group_204,
    Group_207,
    Group_206,
    Group_208,
    Group_205,
    Group_204,
  ];

  return (
    <div id="hiring-partners-main-div">
      <h1>
        100+ <span>Hiring Partners</span>
      </h1>
      <img
        src={Rectangle_632}
        alt=""
        srcset=""
        id="hiring-partners-heading-rectangle"
      />
      <div id="hiring-partners-company-cont">
        <div id="first-cards-div">
          {arr1.map((el) => (
            <img src={el} alt="" />
          ))}
          {arr1.map((el) => (
            <img src={el} alt="" />
          ))}
        </div>
        <div id="second-cards-div">
          {arr2.map((el) => (
            <img src={el} alt="" />
          ))}
          {arr2.map((el) => (
            <img src={el} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringPartners;
