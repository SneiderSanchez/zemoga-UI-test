import React from "react";
import { Switch, Route } from "react-router-dom";
import Root from "../Home";
import {
  Login,
  HowItWorks,
  PastTrials,
  ContactUs,
  Privacy,
  Search,
  Terms,
  PageNotFound,
} from "../views";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Root />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/terms">
        <Terms />
      </Route>
      <Route path="/privacy">
        <Privacy />
      </Route>
      <Route path="/contactUs">
        <ContactUs />
      </Route>
      <Route path="/Terms">
        <Terms />
      </Route>
      <Route path="/pastTrials">
        <PastTrials />
      </Route>
      <Route path="/howItWorks">
        <HowItWorks />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}
