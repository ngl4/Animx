import React, { Component } from "react";
import "./Home.css";
import HomeNav from "../../components/HomeNav";

class Home extends Component {
  state = {
    score: 0,
    topScore: 0,
    array: [],
    guessedCorrect: true,
  };


  render() {


    return (
      <div>
        <div className="wrapper">
        <HomeNav />
          {/* Heading */}
          <div className="jumbotron jumbotron-fluid heading-background text-white">
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4 heading-title">
                Welcome to animX!
              </h1>
              <p className="lead heading-lead">
                This is 3D animating Website Builder
              </p>
              <button className="btn btn-light heading-button">Click Here to Start</button>

            </div>
          </div>

          {/* Content: Clicky boxes */}
          <div className="container clicky-wrap">


           </div>

          {/* Footer - force bottom */}
          <footer className="container-fluid text-white p-3">
            <div className="container">
              <p>Copyright 2018 Animx</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
