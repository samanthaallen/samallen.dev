import React from "react";
import "./AboutMeContainer.css";
import { lightPurple, darkPurple } from "./constants/colors";
import selfie from "./assets/selfie.jpg";
import PostContainer from "./PostContainer";

function AboutMeContainer() {
  return (
    <PostContainer
      stickyTape="Who's Sam"
      backgroundColor={lightPurple}
      stickyTapeColor={darkPurple}
    >
      <div className="AboutMeFlexBox">
        <div className="AboutMeFlexBoxItem">
          <img src={selfie} alt="Selfie of Sam" />
        </div>
        <div className="AboutMeFlexBoxItem">
          <div className="SelfBio">
            <h2>Meet Sam Allen</h2>
            <p>
              A full-stack software engineer who can take complex problems and
              produce scalable solutions. Has led enterprise-scale projects from
              inception through delivery. Always eager to learn and teach
              others.
            </p>
            <p>
              Pronouns: <b>She/Her</b>
              <br />
              Location: <b>San Francisco, California</b>
            </p>
          </div>
        </div>
      </div>
    </PostContainer>
  );
}

export default AboutMeContainer;
