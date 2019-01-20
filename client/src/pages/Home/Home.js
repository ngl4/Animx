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
    username: "",
    password: "",
    err: ""
  };

  componentDidMount() {
    axios
      .get("/user_data")
      .then(response => {
        console.log(response);
        if (response.data.loggedIn) {
          this.setState({
            loggedIn: true,
            username: response.data.username
          });
        } else {
          console.log("no login user stored in session!");
        }
      })
      .catch(err => console.log(err));
  }

  handlelogin = event => {
    event.preventDefault();
    console.log("handle login!");
    console.log(this);
    const component = this;
    axios
      .post("/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response);
        component.setState({
          loggedIn: true
        });
        window.location.assign("/template");
      })
      .catch(function(err) {
        console.log(err);
        //if it is status code 400, mention that they need to input username and password
          if(err === "Error: Request failed with status code 400") {
            console.log("Error 400: Please Enter STH");
            component.setState({
              err: "Please enter an username and password (OR use username: admin | password: 12345)"
            })
          }else {
            console.log("Error 401: Please Enter Correct Username and Password");
            component.setState({
              err: "Please enter an authorized username or password (OR use username: admin | password: 12345)"
            })
          }
        //if it is status code 401, mention that they are unauthorized,
        //please use username: admin and password: password
      });
  };

  handlelogout = event => {
    event.preventDefault();
    console.log("handle logout");
    const component = this;
    axios
      .get("/logout")
      .then(function(response) {
        console.log(response);
        component.setState({
          loggedIn: false,
          username: response.data.username
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
              
              {/* Logging out error message */}
              <p className="text-danger">{this.state.err ? this.state.err : ""}</p>
              <form>
                <div class="form-group">
                  <label for="exampleInputUsername">Username</label>
                  <input
                    type="Username"
                    class="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    id="exampleInputUsername"
                    aria-describedby="UsernameHelp"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </form>
              {this.state.loggedIn ? (
                <button onClick={this.handlelogout}> Logout Here </button>
              ) : (
                <button onClick={this.handlelogin}> Login Here </button>
              )}
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
