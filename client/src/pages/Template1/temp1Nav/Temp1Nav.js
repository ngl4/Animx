import React, { Component } from "react";
import "./Temp1Nav.css";
// import ScrollableAnchor from 'react-scrollable-anchor'



class Temp1Nav extends Component {

  render() {
    return (
      <nav className="p-3 top">
        <div className="d-flex justify-content-center">
        <div class="navContent">
        <button type="button" class="btn btn-light" id="abtBtn"><a href="#section1">ABOUT</a></button>
        <button type="button" class="btn btn-light" id="portBtn"><a href="#section2">PORTFOLIO</a></button>
        <button type="button" class="btn btn-light" id="blgBtn"><a href="#section3">BLOG</a></button>
        <button type="button" class="btn btn-light" id="ctcBtn"><a href="#section4">CONTACT</a></button>
        </div>
        </div>
      </nav>
    );
  }
}

export default Temp1Nav;
