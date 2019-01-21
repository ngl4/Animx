import React, { Component } from "react";
import "./HomeNav.css";
import axios from "axios";

//HomeNav is for the Home Page only

class HomeNav extends Component {
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
          loggedIn: false,
        });
        window.location.reload();
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <nav className="p-3 fixed-top nav-home-background">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
        <div className="d-flex">
            <div className="pt-3 pr-3 animx-subtitle"></div>
            <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="pt-3 pl-2 animx-subtitle"></div>
        </div>
          
          <div className="animx-color animx-font mr-5"><strong></strong></div>

          <div  className="d-flex">
           <div className="pt-2 pr-2 animx-login">
           {this.state.loggedIn ? <div><span className="animx-login">hi admin!</span> |<a href="/template" className="pl-2 pr-2 animx-login">templates</a>| <a href="/" className="animx-logout" onClick={this.handlelogout}>logout</a></div> : <a href="/login" className="animx-login">login</a>}           
           </div>
           {/* <div className="pt-2 pr-2 animx-login">|</div>
           <div className="pt-2 pl-1 animx-login"> sign up</div>
             */}
          </div>  
        </div>
      </nav>
    );
  }
}

export default HomeNav;
