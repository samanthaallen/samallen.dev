import React from "react";
import "./HeaderLinks.css";
import { BrowserRouter as Link } from "react-router-dom";


function HeaderLinks() {
  return (
    <div>
      <Link to="/" className="Name">
        <h1 className="Name">Sam Allen</h1>
      </Link>
      <div className="HeaderLinkContainer">
        <Link to="/recipes" className="HeaderLink">
          Recipes
        </Link>
        <Link to="/tech" className="HeaderLink">
          Tech Blog
        </Link>
        <Link to="/about" className="HeaderLink">
          About
        </Link>
        <Link to="/resume" className="HeaderLink">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default HeaderLinks;
