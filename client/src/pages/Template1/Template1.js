import React, { Component } from "react";
import "./Template1.css";
import Temp13D from "./temp13D/Temp13D";
import Temp1Nav from "./temp1Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Temp1Foot from "./temp1foot";


class Template1 extends Component {
    state = {

    };

    render() {

        return (
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



        );
    }
}

export default Template1;
