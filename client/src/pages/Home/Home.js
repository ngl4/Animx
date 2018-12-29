import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../../components/Nav";

class Home extends Component {
  state = {
    
  };

  render() {
    return (
      <div>
        <Nav /> 
        {/* Heading */}
        <div className="jumbotron jumbotron-fluid mt-5 text-white">
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4">
                <strong>Welcome to Animx!</strong>
              </h1>
              <p className="lead">
                3D Website Building Platform
              </p>
            </div>
          </div>

        {/* Content */}

      </div>
    );
  }
}

export default Home;
