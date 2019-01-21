import React, { Component } from "react";
import ReactRevealText from "react-reveal-text";
import "./Text.css";


class Text extends Component {

    constructor() {
        super();
        this.state = { show: false };
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 1500);
      }
    
      render() {
        const bgStyles = {
          background: 'transparent',
        };
        const textStyles = {
          color: "#23ba8b",
          fontSize: '3.7rem',
          lineHeight: '50px',
          fontFamily: 'Noto Serif',
          textAlign: 'center',
          letterSpacing: '1em',
          paddingLeft: '1em', // to compensate for letter spacing
        };
        return (
            <div style={{ zIndex: -10 }}>
          <div className="textBox" style={bgStyles}>
            <div style={textStyles}>
              <ReactRevealText show={this.state.show} text="ARCHITECTURE" />
            </div>
          </div>
          </div>
        );
      }
    }

export default Text;