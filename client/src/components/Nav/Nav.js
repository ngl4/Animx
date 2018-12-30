import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="p-3 fixed-top nav-background">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
        <div className="d-flex">
            <div className="pt-3 pr-3 animx-subtitle">content</div>
            <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="pt-3 pl-2 animx-subtitle">view</div>
        </div>
          
          <div className="animx-color animx-font mr-5"><strong>animX</strong></div>
          {/* <div className="header-midtitle">{title}</div> */}
          <div  className="pt-3 pl-2 animx-subtitle">
           {/* <div className="pt-2 pr-2 animx-login">Login</div>
           <div className="pt-2 pr-2 animx-login">|</div>
           <div className="pt-2 pl-2 animx-login"> Sign Up</div> */}
            account
          </div>  
        </div>
      </nav>
    );
  }
}

export default Nav;
