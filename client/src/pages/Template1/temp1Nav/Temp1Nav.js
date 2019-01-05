import React, { Component } from "react";
import "./Temp1Nav.css";


class Temp1Nav extends Component {

  render() {
    return (
      <nav className="p-3 fixed-top">
        <div className="d-flex justify-content-center">
        <div className="d-flex">
            <div className="d-flex justify-content-center">About</div>
            <div className="pt-3 pr-2 animx-subtitle"></div>       <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="d-flex justify-content-center">Portfolio</div>
            <div className="pt-3 pr-2 animx-subtitle"></div> <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="d-flex justify-content-center">Resume</div>
            <div className="pt-3 pr-2 animx-subtitle"></div> <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="d-flex justify-content-center">Contact</div>
            <div className="pt-3 pr-2 animx-subtitle"></div>
        </div>
        </div>
      </nav>
    );
  }
}

export default Temp1Nav;
