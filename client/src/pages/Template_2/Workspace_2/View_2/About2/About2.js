import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./About2.css";
import Nav2 from "../Nav2";
import Foot2 from "../Foot2";
import Roll from "react-reveal/Roll";
import axios from "axios";
import Nav from "../../../../../components/Nav";

class About2 extends Component {
  state = {
    about_title: "",
    about_textarea: "",
    imageUrl: ""
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        //adding this component variable, we can then access the "this" keyword/object
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i) {
            if (elem.section === "about2_title") {
              component.setState({
                about_title: elem.content
              });
            }
            if (elem.section === "about2_textarea") {
              component.setState({
                about_textarea: elem.content
              });
            }
          });
        }
      })
      .catch(err => console.log(err));

    axios.get("/api/displayImage").then(response => {
      var component = this;
      if (response) {
        response.data.forEach(function(elem, i) {
          if (elem.section === "temp2_about") {
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
      <Fade Cascade>
        <div className="wrapper-temp2">
        <Nav
          contentUrl="/template_2/workspace_2/content_2"
          viewUrl="/template_2/workspace_2/view_2"
        />
          <Nav2 />
          <div className="aboutArch container">
            <div className="abtArch d-flex flex-column justify-content-center">
              <div className="card" id="cardArch">
                <div className="card-body-basic">
                  {this.state.imageUrl ? (
                    <div className="">
                      <img
                        src={this.state.imageUrl}
                        className="responsive-img-about2"
                        alt="not available"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src="https://s3.us-east-2.amazonaws.com/animxproject/manhattan-336708_640.jpg"
                        className="responsive-sampleimg-about2"
                        alt="not available"
                      />
                    </div>
                  )}

                  <p className="card-text-again">
                    <button
                      className="btn btn-secondary my-5"
                      type="button"
                      onClick={this.handleClick}
                    >
                      {this.state.show
                        ? ""
                        : this.state.about_title}
                    </button>

                    <div className="rollIt">
                      <Roll left opposite when={this.state.show}>
                        <h6>
                          {" "}
                          {this.state.about_textarea
                            ? this.state.about_textarea
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."}
                        </h6>
                      </Roll>
                    </div>
                    {/* <div className="rollIt">
                    <Roll right opposite when={this.state.show}>
                      <h6>                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</h6>
                    </Roll>
                  </div>

                  <div className="rollIt">
                    <Roll left opposite when={this.state.show}>
                      <h6>                              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    </Roll>
                  </div> */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Foot2 />
        </div>
      </Fade>
    );
  }
}

export default About2;
