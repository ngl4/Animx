import React, { Component } from "react";
import "./Contact2.css";
import Flip from "react-reveal/Flip";
// import Fade from 'react-reveal/Fade';
import Nav2 from "../Nav2";
import Foot2 from "../Foot2";
import axios from "axios";
import Nav from "../../../../../components/Nav";


class Contact2 extends Component {
  state = {
    contact_title: "",
    contact_textarea: "",
    contact_email: "",
    contact_linkedin: "",
    contact_github: "",
    contact_twitter: "",
    contact_instagram: "",
    contact_facebook: ""
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        console.log(res);
        //adding this component variable, we can then access the "this" keyword/object
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i) {
            if (elem.section === "contact2_title") {
              component.setState({
                contact_title: elem.content
              });
            }
            if (elem.section === "contact2_textarea") {
              component.setState({
                contact_textarea: elem.content
              });
            }
            if (elem.section === "contact2_email") {
              component.setState({
                contact_email: elem.content
              });
            }

            if (elem.section === "contact2_github") {
              component.setState({
                contact_github: elem.content
              });
            }
            if (elem.section === "contact2_linkedin") {
              component.setState({
                contact_linkedin: elem.content
              });
            }
            if (elem.section === "contact2_twitter") {
              component.setState({
                contact_twitter: elem.content
              });
            }
            if (elem.section === "contact2_instagram") {
              component.setState({
                contact_instagram: elem.content
              });
            }
            if (elem.section === "contact2_facebook") {
              component.setState({
                contact_facebook: elem.content
              });
            }
          });
        }
      })
      .catch(err => console.log(err));
  }

  openInNewTab = url => {
    console.log("This is running!!!");
    const win = window.open(url, "_blank");
    return win;
  };

  render() {
    return (
      <Flip left cascade>
        <Nav
          contentUrl="/template_2/workspace_2/content_2"
          viewUrl="/template_2/workspace_2/view_2"
        />
        <Nav2 />

        <div className="contact-container-two">
          <p class="contentArch">
            {this.state.contact_title
              ? this.state.contact_title
              : "CONTACT ME:"}
          </p>
          <p class="archContact">
            {this.state.contact_textarea
              ? this.state.contact_textarea
              : "Ipsum nunc aliquet bibendum enim. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Vitae congue mauris rhoncus aenean."}
          </p>
          <div class="centering">
            <div className="row" id="contactFA">
              {this.state.contact_email ? (
                <div class="envelope">
                  <a href={"mailto:" + this.state.contact_email}>
                    <i class="fas fa-envelope" id="font" />
                  </a>
                </div>
              ) : (
                <div class="envelope">
                  <i class="fas fa-envelope" id="font" />
                </div>
              )}

              <div id="emailID">
                {this.state.contact_email
                  ? this.state.contact_email
                  : "EMAIL@EMAIL.COM"}
              </div>
            </div>

            <div className="row" id="contactFA">
              {this.state.contact_linkedin ? (
                <div class="col-sm-2">
                  <span
                    onClick={() =>
                      this.openInNewTab(this.state.contact_linkedin)
                    }
                  >
                    <i class="fab fa-linkedin-in" id="font" />
                  </span>
                </div>
              ) : (
                ""
              )}

              {this.state.contact_github ? (
                <div class="col-sm-2">
                  <span
                    onClick={() => this.openInNewTab(this.state.contact_github)}
                  >
                    <i class="fab fa-github" id="font" />
                  </span>
                </div>
              ) : (
                ""
              )}

              {this.state.contact_twitter ? (
                <div class="col-sm-2">
                  <span
                    onClick={() =>
                      this.openInNewTab(this.state.contact_twitter)
                    }
                  >
                    <i class="fab fa-twitter" id="font" />
                  </span>
                </div>
              ) : (
                ""
              )}

              {this.state.contact_instagram ? (
                <div class="col-sm-2">
                  <span
                    onClick={() =>
                      this.openInNewTab(this.state.contact_instagram)
                    }
                  >
                    <i class="fab fa-instagram" id="font" />
                  </span>
                </div>
              ) : (
                ""
              )}

              {this.state.contact_facebook ? (
                <div class="col-sm-2">
                  <span
                    onClick={() =>
                      this.openInNewTab(this.state.contact_facebook)
                    }
                  >
                    <i class="fab fa-facebook-square" id="font" />
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <Foot2 />
      </Flip>
    );
  }
}

export default Contact2;
