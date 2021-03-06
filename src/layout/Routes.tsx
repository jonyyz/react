import * as React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Welcome from "../views/Welcome";
import Users from "../views/Users";
import NotFound from "../views/NotFound";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/users" component={Users} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
