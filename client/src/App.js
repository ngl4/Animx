import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Content_1 from "./pages/Template_1/Workspace_1/Content_1";
import View_1 from "./pages/Template_1/Workspace_1/View_1";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Template1 from "./pages/Template1";

=======
import Template from "./pages/Template";
import Template_1 from "./pages/Template_1/Workspace_1"
>>>>>>> master

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
<<<<<<< HEAD
        <Route exact path="/workspace" component={Workspace} />
        <Route exact path="/workspace/content" component={Content} />
        <Route exact path="/workspace/view" component={View} />
        <Route exact path="/template1" component={Template1} />
=======
        <Route exact path="/template" component={Template} />
        <Route exact path="/template_1/workspace" component={Template_1} />
        <Route exact path="/template_1/workspace_1/content_1" component={Content_1} />
        <Route exact path="/template_1/workspace_1/view_1" component={View_1} />
>>>>>>> master
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
