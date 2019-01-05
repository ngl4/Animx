import React, { Component } from "react";
import "./Workspace.css";
import Nav from "../../components/Nav";


class Workspace extends Component {
  state = {

  };
  

  render() {

    return (
      <div>
          <Nav />
          <div className="jumbotron mt-5 text-center">
              This is Workspace!!!
          </div>

      </div>
    );
  }
}

export default Workspace;
