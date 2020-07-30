import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import AllEntries from "./AllEntries";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav></nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/entries" component={AllEntries} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
