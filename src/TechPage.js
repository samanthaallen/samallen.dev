import React from "react";
import { lightGreen, darkGreen } from "./constants/colors";
import PostContainer from "./PostContainer";
import TechPostLayout from "./TechPostLayout";
import PostPreview from "./PostPreview";

function TechPage() {
  return (
    <PostContainer
      stickyTape="Tech Blog"
      backgroundColor={lightGreen}
      stickyTapeColor={darkGreen}
    >
      <TechPostLayout>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
      </TechPostLayout>
    </PostContainer>
  );
}

export default TechPage;
