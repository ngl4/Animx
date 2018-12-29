import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="bg-danger p-4 fixed-top">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
          <Nav />
          <div className="nav-title">Content</div>
          <div className="nav-title">View</div>
          <div className="nav-midtitle">Animx</div>
          <div className="nav-accountTitle">
            Account
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
