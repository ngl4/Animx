import React, { Component } from "react";
import "./TemplateNav.css";
import axios from "axios";

// TemplateNav is only for Template Page where you choose Templates

class TemplateNav extends Component {
  state = {
    loggedIn: false
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

  handlelogout = event => {
    event.preventDefault();
    console.log("handle logout");
    const component = this;
    axios
      .get("/logout")
      .then(function(response) {
        console.log(response);
        component.setState({
          loggedIn: false
        });
        window.location.assign("/");
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <nav className="p-3 fixed-top nav-background">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
          <div className="d-flex">
            <div className="pt-3 pr-3 animx-subtitle">
              <a href="/" className="animx-color">
                back
              </a>
            </div>
            <div className="pt-3 pr-2 animx-subtitle" />
            <div className="pt-3 pl-2 animx-subtitle" />
          </div>

          <div className=" animx-font mr-5">
            <a href="/" className="animx-color">
              animX
            </a>
          </div>
          {/* <div className="header-midtitle">{title}</div> */}
          <div className="pt-3 pl-2 animx-subtitle">
            {/* <div className="pt-2 pr-2 animx-login">Login</div>
           <div className="pt-2 pr-2 animx-login">|</div>
           <div className="pt-2 pl-2 animx-login"> Sign Up</div> */}
            <div class="nav-item dropdown">
              <a
                class="dropdown-toggle animx-color"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                account
              </a>
              <div
                class="dropdown-menu menu-opacity"
                aria-labelledby="navbarDropdown"
              >
                <div class="ml-4">hello admin!</div>
                <div class="dropdown-divider" />
                <a class="dropdown-item animx-color" href="#" onClick={this.handlelogout}>
                  sign out here
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TemplateNav;
