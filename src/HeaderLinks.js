import React from "react";
import "./HeaderLinks.css";

function HeaderLinks() {
  return (
    <div>
      <div className="HeaderLinkContainer">
        <a className="HeaderLink">Recipes</a>
        <a className="HeaderLink">Tech Blog</a>
        <a className="HeaderLink">About</a>
        <a className="HeaderLink">Resume</a>
      </div>
      <hr />
    </div>
  );
}

export default HeaderLinks;
