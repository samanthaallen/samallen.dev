import React from "react";
import "./HeaderLinks.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RecipePage from "./RecipePage";
import TechPage from "./TechPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import PostContainer from "./PostContainer";

function HeaderNavigation() {
  return (
    <div>
      <Router>
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
        <hr />

        <Switch>
          <Route exact path="/">
            <PostContainer />
          </Route>
          <Route path="/recipes">
            <RecipePage />
          </Route>
          <Route path="/tech">
            <TechPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default HeaderNavigation;
