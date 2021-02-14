import React from "react";
import { Switch, Route } from "react-router-dom";
import Root from "../Home";
import Login from "../views/Login";
import HowItWorks from "../views/HowItWorks";
import PastTrials from "../views/PastTrials";
import ContactUs from "../views/ContactUs";
import Privacy from "../views/Privacy";
import Search from "../views/Search";
import Terms from "../views/Terms";
import PageNotFound from "../views/PageNotFound";

export default function Router() {
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
