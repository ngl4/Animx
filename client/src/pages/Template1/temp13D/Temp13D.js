import React, { Component } from "react";
import threeEntryPoint from "./threejs/threeEntryPoint"

class Temp13D extends Component {
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

export default Temp13D;