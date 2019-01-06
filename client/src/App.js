import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Content_1 from "./pages/Template_1/Workspace_1/Content_1";
import View_1 from "./pages/Template_1/Workspace_1/View_1";
import NoMatch from "./pages/NoMatch";
import Template from "./pages/Template";
import Template_1 from "./pages/Template_1/Workspace_1"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/template" component={Template} />
        <Route exact path="/template_1/workspace" component={Template_1} />
        <Route exact path="/template_1/workspace_1/content_1" component={Content_1} />
        <Route exact path="/template_1/workspace_1/view_1" component={View_1} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
