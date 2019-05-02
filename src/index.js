import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Data from "./components/Components/Data";
import Redirect from "./components/Components/Redirect";
import Home from "./components/Components/Home";
import err from "./components/Components/Error";
import LinkedInData from "./components/Components/LinkedInData";
const routing = (
  <Router>
    <div>
      <Route exact path="/data" component={Data} />
      <Route exact path="/redirect" component={Redirect} />
      <Route exact path="/error" component={err} />
      <Route exact path="/ld" component={LinkedInData} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
