import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, AllEntries, SingleEntry } from "./index";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/entries" component={AllEntries} />
      </Switch>
    </div>
  );
};

export default Routes;
