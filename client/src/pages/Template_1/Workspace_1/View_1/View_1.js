import React, { Component } from "react";
import Nav from "../../../../components/Nav";
import Temp13D from "./temp13D/Temp13D";
import Temp1Nav from "./temp1Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Temp1Foot from "./temp1foot";
import ScrollableAnchor from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';



class View_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="mt-5"><br /> <br />
        <div>
                <Temp1Nav 
                  AboutUrl="#About"
                  PortfolioUrl="#Portfolio"
                  ContactUrl="#Contact"/>

              <Fade Cascade>
                <Temp13D />
              </Fade>

                <ScrollableAnchor id={"About"}>
                <div div className="abt" style={{ display: 'flex', justifyContent: 'center', }}>
                    <About />
                </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={"Portfolio"}>
                <div div className="port" style={{ display: 'flex', justifyContent: 'center', }}>
                    <Portfolio />
                </div>
                </ScrollableAnchor>

 
                <ScrollableAnchor id={"Contact"}>
                <div div className="contact" style={{ display: 'flex', justifyContent: 'center', }}>
                    <Contact />
                </div>
                </ScrollableAnchor>
                
        
                <div div className="footer" style={{ display: 'flex', justifyContent: 'left', }}>
                    <Temp1Foot />
                </div>
      

            </div>
        </div>
      </div>
    );
  }
}

export default View_1;
