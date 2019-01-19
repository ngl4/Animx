import React, { Component } from "react";
import "./HomeNav.css";
import axios from "axios";

//HomeNav is for the Home Page only

class HomeNav extends Component {
  state = {
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
    return (
      <nav className="p-3 fixed-top">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
        <div className="d-flex">
            <div className="pt-3 pr-3 animx-subtitle"></div>
            <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="pt-3 pl-2 animx-subtitle"></div>
        </div>
          
          <div className="animx-color animx-font mr-5"><strong></strong></div>

          <div  className="d-flex">
           <div className="pt-2 pr-2 animx-login">login</div>
           <div className="pt-2 pr-2 animx-login">|</div>
           <div className="pt-2 pl-1 animx-login"> sign up</div>
            
          </div>  
        </div>
      </nav>
    );
  }
}

export default HomeNav;
