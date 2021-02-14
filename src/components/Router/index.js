import React from "react";
import { Switch, Route } from "react-router-dom";
import Root from "../Home";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Root />
      </Route>
    </Switch>
  );
}
