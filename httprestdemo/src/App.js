import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import rest from "./components/pages/rest";
import http from "./components/pages/http";
import soap from "./components/pages/soap";

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/rest" component={rest} />
      <Route exact path="/http" component={http} />
      <Route path="/soap" component={soap} />
    </div>
  </Router>;

export default App;