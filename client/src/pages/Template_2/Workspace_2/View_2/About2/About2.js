import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import "./About2.css";


class About2 extends Component {

  render() {
    return (
      <Fade Cascade>
      <div class="aboutArch">

        <div className="abtArch" style={{ display: 'flex', justifyContent: 'center', }}>
        <i class="fas fa-user" id="circular"></i>
          <div class="card" id="cardArch">
            <div class="card-body-basic">
          
              <h3 class="card-title">About Me</h3>
              <p class="card-text-again">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.

            </p>

            </div>
          </div>

       
        </div>

      </div>
      </Fade>
    

    );
  }
}

export default About2;