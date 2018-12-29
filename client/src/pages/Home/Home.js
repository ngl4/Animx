import React, { Component } from "react";
import "./Home.css";
import Nav from "../../components/Nav";

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
          {/* Sticky Header: Name(link), state, Score and Top Score */}
          <header className="bg-danger p-4 fixed-top">
            <div className="container d-flex justify-content-between text-white font-weight-bold">
              <Nav />
              <div className="header-title">Clickling Game</div>
              {/* <div className="header-midtitle">{title}</div> */}
              <div className="header-scoretitle">
                Score: {this.state.score} | Top Score: {this.state.topScore}{" "}
              </div>
            </div>
          </header>

          {/* Heading */}
          <div className="jumbotron jumbotron-fluid mt-5 heading-background text-white">
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4">
                <strong>Welcome to Home</strong>
              </h1>
              <p className="lead">
                Lets see how to upload images here!!!
              </p>
            </div>
          </div>

          {/* Content: Clicky boxes */}
          <div className="container clicky-wrap">

           </div>

          {/* Footer - force bottom */}
          <footer className="container-fluid bg-danger text-white p-3">
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
