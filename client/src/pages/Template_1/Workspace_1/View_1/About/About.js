import React, { Component } from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import axios from "axios";

class About extends Component {
  state = {
    about_title: "",
    about_textarea: "",
    imageUrl: "",
    sampleUrl: "https://s3.us-east-2.amazonaws.com/animxproject/sample_profile.jpg"
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        //adding this component variable, we can then access the "this" keyword/object
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i) {
            if (elem.section === "about_title") {
              component.setState({
                about_title: elem.content
              });
            }
            if (elem.section === "about_textarea") {
              component.setState({
                about_textarea: elem.content
              });
            }
          });
        } else {
          this.setState({
            isAboutSubmit: false
          });
        }
      })
      .catch(err => console.log(err));

    axios.get("/api/displayImage").then(response => {
      var component = this;
      if (response) {
        response.data.forEach(function(elem, i) {
          if (elem.section === "temp1_about") {
            component.setState({
              imageUrl:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
        });
      }
    });
  }

  render() {
    return (
      <div class="aboutMe">
        <Fade Cascade>
          <div
            style={{ display: "flex", justifyContent: "center" }}
          >
            {this.state.imageUrl ? (
              <div className="mr-5">
              <img
                src={this.state.imageUrl}
                className="responsive-img"
                alt="not available"
              />
              </div>
            ) : (

            <div className="mr-5">
              <img
                src={this.state.sampleUrl}
                className="responsive-img"
                alt="not available"
              />
              </div>
            )}
           
            <div class="card ml-4">
              <div class="card-body">
                <h3 class="card-title">
                  {this.state.about_title ? this.state.about_title : "About Me"}
                </h3>
                <p class="card-text">
                  {" "}
                  {this.state.about_textarea
                    ? this.state.about_textarea
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labornisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, suntin culpa qui officia deserunt mollit anim id est laborum."}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
