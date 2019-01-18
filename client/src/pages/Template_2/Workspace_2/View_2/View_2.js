import React, { Component } from "react";
import Nav from "../../../../components/Nav";
import Temp23D from "./3D2/Temp23d";
import About2 from "./About2";
import Nav2 from "./Nav2";
import Foot2 from "./Foot2";
import Portfolio2 from "./Portfolio2";
import Contact2 from "./Contact2";


class View_2 extends Component {
  state = {};

  render() {
    return (

      <div>
        <Nav
          contentUrl="/template_2/workspace_2/content_2"
          viewUrl="/template_2/workspace_2/view_2"
        />

        <div><Nav2 /></div>
        <div><Temp23D /></div> 
        {/* <div><About2 /></div>
        <div><Portfolio2 /></div>
        <div className="Contact2" style={{ display: 'flex', justifyContent: 'center', }}>
        <Contact2 />
        </div> */}
        <div><Foot2 /></div>
      </div>
    );
  }
}

export default View_2;