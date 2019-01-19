import React, { Component } from "react";
import "./Home.css";
import HomeNav from "../../components/HomeNav";
import Footer from "../../components/Footer";
import axios from "axios";

class Home extends Component {
  state = {
    score: 0,
    topScore: 0,
    array: [],
    guessedCorrect: true,
    loggedIn: false,
    username: ""
  };

  componentDidMount() {
    axios.get("/user_data")
    .then(response => {
      console.log(response);
      if(response.data.loggedIn){
        this.setState({
          loggedIn: true,
          username: response.data.username
        })
      }else {
        console.log("no login user stored in session!");
      }
    })
    .catch(err => console.log(err));
  }

  handlelogin = (event) => {
    event.preventDefault();
    console.log("handle login!");
    console.log(this);
    const component = this;
    axios.post("/login", {
      username: "admin",
      password: "password"
    })
    .then(function(response){
      console.log(response);
      component.setState({
        loggedIn: true,
        username: response.data.username
      })
    })
    .catch(function(err){
      console.log(err);
    })

  }

  handlelogout = (event) => {
    event.preventDefault();
    console.log("handle logout");
    const component = this;
    axios.get("/logout")
    .then(function(response) {
      console.log(response);
      component.setState({
        loggedIn: false,
        username: response.data.username
      })

    })
    .catch(function(err){
      console.log(err);
    })
  }

  render() {
    let banner = this.state.loggedIn
      ? `Wooh! ${this.state.username} are logged In!`
      : `Unauthorized User`;

    return (
      <div>
        <div className="wrapper">
          <HomeNav />
          {/* Heading */}
          <div className="jumbotron jumbotron-fluid heading-background text-white">
            <div className="container mt-5 mb-5 text-center">
              <h3>{banner}</h3>
              <h1 className="display-4 heading-title">Welcome to animX!</h1>
              <p className="lead heading-lead">
                This is a 3D animating Website Builder
              </p>
              {/* {this.state.loggedIn ? "" : <button onClick={this.handlelogin}> Login Here </button>} */}
              {this.state.loggedIn ? <button onClick={this.handlelogout}> Logout Here </button> : <button onClick={this.handlelogin}> Login Here </button>}
              <a className="btn btn-light heading-button" href="/template">
                Click Here to Start
              </a>
            </div>
          </div>

          {/* Content: show sample templates */}
          <div className="container clicky-wrap" />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
