import React from "react";
import "./WorkExperienceLayout.css";

function WorkExperienceLayout() {
  return (
    <div className="WorkExperienceLayout">
      <div className="LeftColumn">
        <h2>Company Name</h2>
        <h3>Job Title</h3>
        <h4>January 2020 - August 2020</h4>
      </div>
      <div className="RightColumn">
        <p>
          I'm on the Activation Team, which owns product onboarding for the
          whole Intercom platform. We try to make the new user experience
          seamless so our users want to stick around.
        </p>
        <p>Some cool stuff I've done:</p>
        <ul>
          <li>
            Major contributor to an interactive product demo that increased
            lead-to-trial conversion by 33%
          </li>
          <li>
            Leading an org-wide initiative to modernize our code base by
            updating our naming conventions across 100+ GitHub repositories
          </li>
          <li>Optimized the product onboarding survey for mobile web</li>
        </ul>
        <p><strong>Tech Stack:</strong> React, Ember, Ruby on Rails</p>
      </div>
    </div>
  );
}

export default WorkExperienceLayout;
