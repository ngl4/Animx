import React, { Component } from "react";
import Nav from "../../../../components/Nav";

class View_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron mt-5 text-center">
          This is where you VIEW contents!!!
        </div>
      </div>
    );
  }
}

export default View_1;
