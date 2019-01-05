import React, { Component } from "react";
import "./Template1.css";
import Nav from "../../components/Nav";
import Temp13D from "./temp13D/Temp13D";
import Temp1Nav from "./temp1Nav";


class Template1 extends Component {
  state = {

  };

  render() {

    return (
      <div>
      <Temp1Nav />
      <Temp13D />
      <div className="jumbotron mt-5 text-center">
        Content for Basic "About Me" Website, will include "Photo" component and maybe some other effects with more time!
      </div>
      </div>
    );
  }
}

export default Template1;
