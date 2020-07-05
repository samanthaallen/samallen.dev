import React from "react";
import "./HeaderNavigation.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RecipePage from "./RecipePage";
import TechPage from "./TechPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import PostContainer from "./PostContainer";
import HeaderLinks from "./HeaderLinks";

function HeaderNavigation() {
  return (
    <div>
      <Router>
        <HeaderLinks />
        <hr className="HeaderHr" />

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
