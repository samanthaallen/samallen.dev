import React from "react";
import "./FooterNavigation.css";

import { BrowserRouter as Link } from "react-router-dom";

function FooterNavigation() {
  return (
    <div className="FooterContainer">
      <Link to="/" className="FooterName">
        <h2 className="FooterName">Sam Allen</h2>
      </Link>
      <hr className="FooterHr" />
      <div className="FooterLinkContainer">
        <Link to="/recipes" className="FooterLink">
          Recipes
        </Link>
        <Link to="/tech" className="FooterLink">
          Tech Blog
        </Link>
        <Link to="/about" className="FooterLink">
          About
        </Link>
        <Link to="/resume" className="FooterLink">
          Resume
        </Link>
      </div>
      <p className="FooterText">
        ©2021 Sam Allen.  Designed by <a href="https://chris.horse/" className="FooterTextLink">Christopher Sullivan.</a>
      </p>
    </div>
  );
}

export default FooterNavigation;
