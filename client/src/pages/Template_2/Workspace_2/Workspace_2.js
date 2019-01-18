import React, { Component } from "react";
import "./Workspace_2.css";
import Nav from "../../../components/Nav";

class Workspace_2 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_2/workspace_2/content_2"
          viewUrl="/template_2/workspace_2/view_2"
        />
        <div className="jumbotron mt-5 text-center">This is Workspace!!!</div>
      </div>
    );
  }
}

export default Workspace_2;
