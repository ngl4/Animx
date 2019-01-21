import React, { Component } from "react";
import "./Temp1Nav.css";
import Fade from 'react-reveal/Fade';





class Temp1Nav extends Component {

  render() {
    return (
      <nav className="p-3 top">
           <Fade cascade>
        <div className="d-flex justify-content-center">
        <div class="navContent">
        <button type="button" class="btn btn-light" id="aboutButn"><a href={this.props.AboutUrl}>ABOUT</a></button>
        <button type="button" class="btn btn-light" id="portBtn"><a href={this.props.PortfolioUrl}>PORTFOLIO</a></button>
        <button type="button" class="btn btn-light" id="ctcBtn"><a href={this.props.ContactUrl}>CONTACT</a></button>
        </div>
     
        </div>
        </Fade>
      </nav>



    );
  }
}

export default Temp1Nav;
