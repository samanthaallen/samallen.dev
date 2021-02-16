import React from "react";
import "./AboutMeContainer.css";
import { lightRed, darkRed } from "./constants/colors";
import frogger3 from "./assets/frogger3.jpeg";
import frogger2 from "./assets/frogger2.jpg";
import PostContainer from "./PostContainer";

function Frogger() {
  return (
    <PostContainer
      stickyTape="Frogger"
      backgroundColor={lightRed}
      stickyTapeColor={darkRed}
    >
      <div className="AboutMeFlexBox">
        <div className="AboutMeFlexBoxItem">
          <img src={frogger2} alt="Frogger" />
        </div>
        <div className="AboutMeFlexBoxItem">
          <img src={frogger3} alt="Frogger" />
        </div>
      </div>
    </PostContainer>
  );
}

export default Frogger;
