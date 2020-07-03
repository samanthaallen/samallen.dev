import React from "react";
import "./WorkExperienceLayout.css";

function WorkExperienceLayout(props) {
  return (
    <div className="WorkExperienceLayout">
      <div className="LeftColumn">
        <h2>{props.company}</h2>
        <h3>{props.jobTitle}</h3>
        <h4>{props.jobDate}</h4>
      </div>
      <div className="RightColumn">
        {props.jobDescription}
      </div>
    </div>
  );
}

export default WorkExperienceLayout;
