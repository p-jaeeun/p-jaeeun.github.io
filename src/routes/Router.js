import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About, Projects, NotFound } from "routes";

const Router = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
