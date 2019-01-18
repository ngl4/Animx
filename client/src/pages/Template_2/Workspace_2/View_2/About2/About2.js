import React, { Component } from "react";
import Fade from 'react-reveal/Fade';


class About2 extends Component {

  render() {
    return (
    
      <div class="aboutArch">
       <Fade Cascade>
        <div className="archi" style={{ display: 'flex', justifyContent: 'center', }}>
        <i class="fas fa-user"></i>
          <div class="card1">
            <div class="card-body">
          
              <h3 class="card-title">About Me</h3>
              <p class="card-text">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
          </div>

       
        </div>
        </Fade>
      </div>
    

    );
  }
}

export default About2;