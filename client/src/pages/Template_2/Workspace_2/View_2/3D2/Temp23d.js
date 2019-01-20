import React, { Component } from "react";
import threeEntryPoint from "./threejs/threeEntryPoint"
import "./threejs/3D2.css";


class Temp23D extends Component {
  state = {

  };

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
}

render () {
    return (
        <div className="header-header" ref={element => this.threeRootElement = element} />
    );
}
}

export default Temp23D;