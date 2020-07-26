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
        <PostPreview
          title="Get Hired: Handling Object-Oriented Design Questions"
          url="https://dev.to/techdebtor/get-hired-handling-object-oriented-design-questions-4i70"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--5fU_jn_H--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/g4te7rpeeltt4miw93yr.jpg"
        >
          Let's work through an object-oriented design question that I was asked
          in an interview with a major tech company.
          <strong> Read more →</strong>
        </PostPreview>
        <PostPreview
          title="Get Hired: Behavioral Interviews for Devs"
          url="https://dev.to/techdebtor/get-hired-behavioral-interviews-for-devs-1f97"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--zMskubs_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zp8uuom8yxexc2oo7whu.jpeg"
        >
          I learned the hard way: you need to prepare for your non-technical
          interviews too.
          <strong> Read more →</strong>
        </PostPreview>
        <PostPreview
          title="Get Hired: Data Structure and Algorithm Interviews For People Who Hate Them"
          url="https://dev.to/techdebtor/get-hired-data-structure-and-algorithm-interviews-for-people-who-hate-them-32ga"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--Pwk3M5Sr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/5n27475tvrev6woidcji.jpeg"
        >
          I'm gonna be honest: I hate data structure and algorithm interviews.
          So I learned some techniques that made them bearable and went from
          bombing them to landing a job at my dream company.
          <strong> Read more →</strong>
        </PostPreview>
        <PostPreview
          title="Get Hired: The Storytelling Resume"
          url="https://dev.to/techdebtor/get-hired-the-storytelling-resume-19ln"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--wTphUp0q--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/d3j7dmwqim6w49i3h6qd.jpeg"
        >
          I got a new job this year and had to rewrite my resume while job
          searching. I rewrote it with one thing in mind - I wanted to tell my
          story and advocate for myself as an awesome developer.
          <strong> Read more →</strong>
        </PostPreview>
      </TechPostLayout>
    </PostContainer>
  );
}

export default TechPage;
