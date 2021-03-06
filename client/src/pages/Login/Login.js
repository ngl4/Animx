import React, { Component } from "react";
import "./Login.css";
import Footer from "../../components/Footer";
import LoginNav from "../../components/LoginNav";
import axios from "axios";
import ThreeScene from "./ThreeScene";

class Login extends Component {
  state = {
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
            loggedIn: true
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
        if (err) {
          console.log("Error 401: Please Enter Correct Username and Password");
          component.setState({
            err:
              "Please enter an authorized username or password (OR use username: admin | password: 12345)"
          });
        }
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
    return (
      <div>
        <LoginNav />
        <div className="wrapper mt-5 ">
          {/* Login */}
          <div className="jumbotron jumbotron-fluid wrapper-login mb-0">
          <br /><br /><br /><br />
            <div className="container">
              <div className="row">
              <div className="col-md-6">
                {/* Logging out error message */}
                <p className="text-danger">
                  {this.state.err ? this.state.err : ""}
                </p>
                <form>
                  <div class="form-group">
                    <label for="exampleInputUsername" className="heading-title">usernamE</label>
                    <input
                      type="Username"
                      class="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      id="exampleInputUsername"
                      aria-describedby="UsernameHelp"
                      // placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="heading-title">passworD</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      id="exampleInputPassword1"
                      // placeholder="Password"
                    />
                  </div>
                </form>
                {this.state.loggedIn ? (
                  ""
                ) : (
                  // <button onClick={this.handlelogout}> Logout Here </button>
                  <button
                    onClick={this.handlelogin}
                    className="text-secondary pl-2 pr-2 login-font login-noborder login-btn"
                  >
                    {" "}
                    <span className="heading-title">Sign In</span>{" "}
                  </button>
                )}
                </div>
                <div className="ml-5">
                  <ThreeScene />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
