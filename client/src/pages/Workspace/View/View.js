import React, { Component } from "react";
import "./View.css";
import Nav from "../../../components/Nav";

class View extends Component {
  state = {

  };
  

  render() {

    return (
      <div>
      <Nav />
      <div className="jumbotron mt-5 text-center">
        This is where you VIEW contents!!!
      </div>
      </div>
    );
  }
}

export default View;
