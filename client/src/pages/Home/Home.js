import React, { Component } from "react";
import "./Home.css";
import HomeNav from "../../components/HomeNav";
import Footer from "../../components/Footer";
import ThreeScene from "./background/ThreeScene";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
        <HomeNav />
          {/* Heading */}
          <div className="jumbotron jumbotron-fluid text-white pt-0 mb-0 home-title-background pb-2">
          <ThreeScene />
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4 heading-title">
                Welcome to animX!
              </h1>
              <p className="lead heading-lead">
                This is a 3D animating Website Builder
              </p>
              {/* <a className="btn btn-light heading-button" href="/template">Click Here to Start</a> */}

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
