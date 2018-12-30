import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import Content from "./pages/Workspace/Content";
import View from "./pages/Workspace/View";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workspace" component={Workspace} />
        <Route exact path="/workspace/content" component={Content} />
        <Route exact path="/workspace/view" component={View} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
