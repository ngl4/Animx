import React, { Component } from "react";

class ScrollBtn extends Component {
  state = {
    intervalId: 0
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        title="Back to top"
        style={this.props.scroll}
        onClick={() => {
          this.scrollToTop();
        }}
        className="mr-5"
      >
        <span style={this.props.arrowUp} className="fas fa-arrow-up " />
      </button>
    );
  }
}

export default ScrollBtn;
