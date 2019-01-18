import React, { Component } from 'react';
import "./Nav2.css";
import About2 from "../About2";
import Portfolio2 from "../Portfolio2";
// import Contact2 from "../

class Menu extends Component {
  render() {
    
    return (
      <div>

            {this.props.showMenu &&
        <container id="menu">
      

            <div className="row" id="row1">
              <div class="col-sm-4">
                <a href="/" class="linksList">
                  <h2 class="navtwo">ABOUT</h2>
                </a>
              </div>

              <div class="col-sm-4">
                <a href="/" class="linksList">
                  <h2 class="navtwo">WORKS</h2>
                </a>
              </div>
            
              <div class="col-sm-4">
                <a href="/" class="linksList">
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