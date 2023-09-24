import "./TopView.css";

const Topview = () => {
  return (
    <div id="main_top-view">
     
        <div id="ellipce"></div>
        <h1>Upskill <span> Yourself </span></h1>
        <p>
          Programs designed in collaboration with leading industry experts to
          help you develop strong fundamentals.
        </p>
        <button> Go to Programs</button>
        
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
  );
};

export default Topview;