import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipePage from "./RecipePage";
import TechPage from "./TechPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import AboutMeContainer from "./AboutMeContainer";
import HeaderLinks from "./HeaderLinks";
import FooterNavigation from "./FooterNavigation";

function App() {
  return (
    <div>
      <Router>
        <HeaderLinks />
        <hr className="HeaderHr" />
        <Switch>
          <Route exact path="/">
            <AboutMeContainer />
            <FooterNavigation />
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
            <FooterNavigation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
