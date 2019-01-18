import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav2.css";
import About2 from "../About2"
import Portfolio2 from "../Portfolio2";
import Contact2 from "../Contact2";

// const About2 = () => <h2>ABOUT</h2>
// const Portfolio2 = () => <h2>WORKS</h2>
// const Contact2 = () => <h2>CONTACT</h2>


class Menu extends Component {
  render() {
    
    return (
      <div>

            {this.props.showMenu &&
        <container id="menu">
      

            <div className="row" id="row1">
              <div class="col-sm-4">
                <a href="/template_2/workspace_2/view_2/about_2" class="linksList">
                  <h2 class="navtwo">ABOUT</h2>
                </a>
              </div>

              <div class="col-sm-4">
                <a href="/template_2/workspace_2/view_2/portfolio_2" class="linksList">
                  <h2 class="navtwo">WORKS</h2>
                </a>
              </div>
            
              <div class="col-sm-4">
                <a href="/template_2/workspace_2/view_2/contact_2" class="linksList">
                  <h2 class="navtwo">CONTACT</h2>
                </a>
                </div>
              </div> 

        </container>
      } 
      </div>
    );
  }
}

export default Menu;