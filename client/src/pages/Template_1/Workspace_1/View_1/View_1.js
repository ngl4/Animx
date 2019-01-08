import React, { Component } from "react";
import Nav from "../../../../components/Nav";
import Temp13D from "./temp13D/Temp13D";
import Temp1Nav from "./temp1Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Temp1Foot from "./temp1foot";

class View_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron text-center">
        <br /><br /><br />
          This is the view page!!!!
        </div>
        <hr />
        <div className="mt-5">
          <div>
                <Temp1Nav />
                <Temp13D />
                <div div className="abt" style={{ display: 'flex', justifyContent: 'center', }}>
                    <About />
                </div>
                <div div className="port" style={{ display: 'flex', justifyContent: 'center', }}>
                    <Portfolio />
                </div>
                <div div className="port" style={{ display: 'flex', justifyContent: 'left', }}>
                    <Contact />
                </div>
                <div div className="port" style={{ display: 'flex', justifyContent: 'left', }}>
                    <Temp1Foot />
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default View_1;
