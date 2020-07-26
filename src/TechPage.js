import React from "react";
import { lightGreen, darkGreen } from "./constants/colors";
import PostContainer from "./PostContainer";

function TechPage() {
  return (
    <PostContainer
      stickyTape="Tech Blog"
      backgroundColor={lightGreen}
      stickyTapeColor={darkGreen}
    ></PostContainer>
  );
}

export default TechPage;
