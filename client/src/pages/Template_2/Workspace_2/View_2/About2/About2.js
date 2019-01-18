import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import "./About2.css";
import Nav2 from "../Nav2";

class About2 extends Component {

  render() {
    return (


      <Fade Cascade>
           <Nav2 />
      <div className="aboutArch">

        <div className="abtArch" style={{ display: 'flex', justifyContent: 'center', }}>
        <i class="fas fa-user" id="circular"></i>
          <div className="card" id="cardArch">
            <div className="card-body-basic">
          
              <h3 className="card-title">About Me</h3>
              <p className="card-text-again">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
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