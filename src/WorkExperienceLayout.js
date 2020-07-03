import React from "react";
import "./WorkExperienceLayout.css";

function WorkExperienceLayout(props) {
  return (
    <div className="WorkExperienceLayout">
      <div className="LeftColumn">
        <h2 className="Company">{props.company}</h2>
        <h3 className="Title">{props.jobTitle}</h3>
        <h4 className="Date">{props.jobDate}</h4>
      </div>
      <div className="RightColumn">{props.jobDescription}</div>
    </div>
  );
}

export default WorkExperienceLayout;
