import React, { Component } from "react";
import "./Temp1Nav.css";
// import ScrollableAnchor from 'react-scrollable-anchor';
// import About from "../About";
// import Portfolio from "../Portfolio";
// import Contact from "../Contact";



class Temp1Nav extends Component {

  render() {
    return (
      <nav className="p-3 top">
        <div className="d-flex justify-content-center">
        <div class="navContent">
        <button type="button" class="btn btn-light" id="abtBtn"><a href={this.props.AboutUrl}>ABOUT</a></button>
        <button type="button" class="btn btn-light" id="portBtn"><a href={this.props.PortfolioUrl}>PORTFOLIO</a></button>
        <button type="button" class="btn btn-light" id="ctcBtn"><a href={this.props.ContactUrl}>CONTACT</a></button>
        
  
        
        
        </div>
        </div>
      </nav>



    );
  }
}

export default Temp1Nav;
