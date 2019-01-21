import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import "./About2.css";
import Nav2 from "../Nav2";
import Foot2 from "../Foot2";
import Roll from 'react-reveal/Roll';

class About2 extends Component {

  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (


      <Fade Cascade>
        <Nav2 />

        <div className="aboutArch">

          <div className="abtArch" style={{ display: 'flex', justifyContent: 'center', }}>
            <i class="fas fa-user" id="circular"></i>
            <div className="card" id="cardArch">
              <div className="card-body-basic">
                <p className="card-text-again">
              <button
                    className="btn btn-success my-5" id="abtBtn"
                    type="button"
                    onClick={this.handleClick}
                  >
                    {this.state.show ? 'Goodbye!' : 'About Me'} 
              </button>

                  <div className="rollIt">
                    <Roll left opposite when={this.state.show}>
                      <h6>              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</h6>
                    </Roll>
                  </div>
                  <div className="rollIt">
                    <Roll right opposite when={this.state.show}>
                      <h6>                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</h6>
                    </Roll>
                  </div>

                  <div className="rollIt">
                    <Roll left opposite when={this.state.show}>
                      <h6>                              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    </Roll>
                  </div>


                </p>

              </div>
            </div>


          </div>

        </div>

        <Foot2 />

      </Fade>



    );
  }
}

export default About2;