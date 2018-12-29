import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {

  openNav = () => {
    this.refs.mySidenav.style.width = "100%";
  }
  
  closeNav = () => {
    this.refs.mySidenav.style.width = "0";
  }
  render() {
    return (
      <nav>
        <div ref="mySidenav" className="sidenav">
          <a href="/" className="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <a href="/">Home</a>
          <a href="/upload">Upload Contents</a>
          <a href="/display">Display Preview</a>
        </div>

        <span className="nav-icon" onClick={this.openNav}>&#9776;</span>

      </nav>
    );
  }
}

export default Nav;
