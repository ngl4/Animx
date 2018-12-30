import React, { Component } from "react";
import "./Home.css";
import HomeNav from "../../components/HomeNav";
import Footer from "../../components/Footer";


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
                This is a 3D animating Website Builder
              </p>
              <a className="btn btn-light heading-button" href="/workspace">Click Here to Start</a>

            </div>
          </div>

          {/* Content: show sample templates */}
          <div className="container clicky-wrap">

           </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
