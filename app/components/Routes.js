import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AllEntries from "./AllEntries";
import SingleEntry from "./SingleEntry";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to={"/entries"}>Past Entries</Link>
          <Link to={"/about"}>About</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/entries" component={AllEntries} />
            <Route path="/entries/:id" component={SingleEntry} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
