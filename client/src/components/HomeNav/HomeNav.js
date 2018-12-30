import React, { Component } from "react";
import "./HomeNav.css";

class HomeNav extends Component {
  render() {
    return (
      <nav className="p-3 fixed-top nav-background">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
        <div className="d-flex">
            <div className="pt-3 pr-3 animx-subtitle"></div>
            <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="pt-3 pl-2 animx-subtitle"></div>
        </div>
          
          <div className="animx-color animx-font mr-5"><strong></strong></div>

          <div  className="d-flex">
           <div className="pt-2 pr-2 animx-login">login</div>
           <div className="pt-2 pr-2 animx-login">|</div>
           <div className="pt-2 pl-1 animx-login"> sign up</div>
            
          </div>  
        </div>
      </nav>
    );
  }
}

export default HomeNav;
