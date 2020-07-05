import React from "react";
import "./HeaderNavigation.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RecipePage from "./RecipePage";
import TechPage from "./TechPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import PostContainer from "./PostContainer";
import HeaderLinks from "./HeaderLinks";
import FooterNavigation from "./FooterNavigation";

function HeaderNavigation() {
  return (
    <div>
      <Router>
        <HeaderLinks />
        <hr className="HeaderHr" />

        <Switch>
          <Route exact path="/">
            <PostContainer />
            <FooterNavigation />
          </Route>
          <Route path="/recipes">
            <RecipePage />
            <FooterNavigation />
          </Route>
          <Route path="/tech">
            <TechPage />
            <FooterNavigation />
          </Route>
          <Route path="/about">
            <AboutPage />
            <FooterNavigation />
          </Route>
          <Route path="/resume">
            <ResumePage />
            <FooterNavigation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default HeaderNavigation;