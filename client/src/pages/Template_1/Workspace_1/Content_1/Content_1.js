import React, { Component } from "react";
import "./Content_1.css";
import Nav from "../../../../components/Nav";

class Content_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron mt-5 text-center">
          This is where you UPLOAD contents!!!
        </div>
      </div>
    );
  }
}

export default Content_1;
