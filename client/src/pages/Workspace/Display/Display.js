import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./Display.css";
import Nav from "../../components/Nav";
// const BASE_URL = "http://localhost:3000/";
// import BearCard from "../../components/BearCard";

class Display extends Component {
  state = {
    score: 0,
    topScore: 0,
    array: [],
    guessedCorrect: true,
    images: [],
    imageUrls: [],
    imageUrl: "",
    message: "",
    errMessage: "",
    uploadMessage: ""
  };

  componentDidMount() {
    
  }

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClickImage = elem => {
    //console.log(elem);
    var newArray = [...this.state.array];

    if (newArray.length === 0) {
      newArray.push(elem);
      this.setState({
        guessedCorrect: true
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1,
          array: newArray,
          guessedCorrect: true

        });
        console.log("%cyou guessed correctly", "color: green");
      } else {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore,
          array: newArray
        });
        console.log("%cyou guessed correctly", "color: green");
      }
    } else {
      const found = newArray.includes(elem);

      if (!found) {
        newArray.push(elem);
        if (this.state.score >= this.state.topScore) {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            array: newArray,
            guessedCorrect: true
          });
          console.log("%cyou guessed correctly", "color: green");
        } else {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore,
            array: newArray,
            guessedCorrect: true

          });
          console.log("%cyou guessed correctly", "color: green");
        }

      } else {
        this.setState({
          score: 0,
          topScore: this.state.topScore,
          array: [],
          guessedCorrect: false
        });
        console.log("%cyou guessed incorrectly", "color: red");
      }
    }

    console.log(newArray);

  };

  

  render() {

    return (
      <div>
        <div className="wrapper">
          {/* Sticky Header: Name(link), state, Score and Top Score */}
          <header className="bg-danger p-4 fixed-top">
            <div className="container d-flex justify-content-between text-white font-weight-bold">
              {/* <div className="header-title"></div> */}
              <Nav />
              <div className="header-midtitle">Clickling Game</div>
              <div className="header-scoretitle">
                Score: {this.state.score} | Top Score: {this.state.topScore}{" "}
              </div>
            </div>
          </header>

          {/* Heading */}
          <div className="jumbotron jumbotron-fluid mt-5 heading-background text-white">
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4">
                <strong>Clickling Game </strong>
              </h1>
              <p className="lead">
                Click on an image to earn points, but don't click on any more
                than once!
              </p>
            </div>
          </div>

          {/* Content: Clicky boxes */}
          <div className="container clicky-wrap">
            {/* {images.map((pic) => (<BearCard
              image={pic}
              handleClickImage={this.handleClickImage}
              key={pic}
            />))} */}

           </div>

          {/* Footer - force bottom */}
          <footer className="container-fluid bg-danger text-white p-3">
            <div className="container">
              <p>Copyright 2018 React Clickling Game</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Display;
