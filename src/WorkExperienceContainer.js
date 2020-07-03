import React from "react";
import "./PostContainer.css";
import "./WorkExperienceContainer.css";
import WorkExperienceLayout from "./WorkExperienceLayout";

function WorkExperienceContainer() {
  return (
    <div className="WorkExperienceContainer">
      <div className="StickyTape">
        <h3 className="StickyTapeWords">Experience</h3>
      </div>
      <WorkExperienceLayout />
      <hr />
      <WorkExperienceLayout />
      <hr />
      <WorkExperienceLayout />
    </div>
  );
}

export default WorkExperienceContainer;
