import React from "react";
import "./HeaderLinks.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Recipes from "./Recipes";
import Tech from "./Tech";
import About from "./About";
import Resume from "./Resume";
import PostContainer from "./PostContainer";

function HeaderLinks() {
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
            <Recipes />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default HeaderLinks;
