import React, { Component } from "react";
import "./Content.css";
import Nav from "../../../components/Nav";


class Content extends Component {
  state = {

  };

  render() {

    return (
      <div>
      <Nav />
      <div className="jumbotron mt-5 text-center">
        This is where you UPLOAD contents!!!
      </div>
      </div>
    );
  }
}

export default Content;


