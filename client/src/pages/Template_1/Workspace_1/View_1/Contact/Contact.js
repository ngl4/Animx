import React, { Component } from "react";
import "./Contact.css";
import Zoom from "react-reveal/Zoom";
import axios from "axios";

class Contact extends Component {
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
            if (elem.section === "contact_title") {
              console.log(elem);
              console.log(component);
              component.setState({
                contact_title: elem.content
              });
            }
            if (elem.section === "contact_textarea") {
              console.log(elem);
              component.setState({
                contact_textarea: elem.content
              });
            }
            if (elem.section === "contact_email") {
              console.log(elem);
              component.setState({
                contact_email: elem.content
              });
            }

            if (elem.section === "contact_github") {
              console.log(elem);
              component.setState({
                contact_github: elem.content
              });
            }
            if (elem.section === "contact_linkedin") {
              console.log(elem);
              component.setState({
                contact_linkedin: elem.content
              });
            }
            if (elem.section === "contact_twitter") {
              console.log(elem);
              component.setState({
                contact_twitter: elem.content
              });
            }
            if (elem.section === "contact_instagram") {
              console.log(elem);
              component.setState({
                contact_instagram: elem.content
              });
            }
            if (elem.section === "contact_facebook") {
              console.log(elem);
              component.setState({
                contact_facebook: elem.content
              });
            }
          });
        }
      })
      .catch(err => console.log(err));
  }

  openInNewTab(url) {
    console.log("This is running!!!");
    const win = window.open(url, "_blank");
    return win;
    //win.focus();
  }

  render() {
    return (
      <div className="contact-container">
        <Zoom Cascade Up>
          <h6>
            {this.state.contact_title
              ? this.state.contact_title
              : "CONTACT ME:"}
          </h6>
          <div class="content">
            {this.state.contact_textarea
              ? this.state.contact_textarea
              : "Ipsum nunc aliquet bibendum enim. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Vitae congue mauris rhoncus aenean."}
          </div>
          <div className="row" id="faicons">
            {this.state.contact_email ? (
              <div class="col-sm-1">
                <a href={"mailto:" + this.state.contact_email}>
                  <i class="fas fa-envelope" />
                </a>
              </div>
            ) : (
              <div class="col-sm-1">
                <i class="fas fa-envelope" />
              </div>
            )}

            <div class="col-sm-.1" id="email">
              {this.state.contact_email
                ? this.state.contact_email
                : "EMAIL@EMAIL.COM"}
            </div>
          </div>

          <div className="row" id="faicons">
            {this.state.contact_linkedin ? (
              <div class="col-sm-1">
                <span
                  onClick={() => this.openInNewTab(this.state.contact_linkedin)}
                >
                  <i class="fab fa-linkedin-in" />
                </span>
              </div>
            ) : (
              ""
            )}

            {this.state.contact_github ? (
              <div class="col-sm-1">
                <span
                  onClick={() => this.openInNewTab(this.state.contact_github)}
                >
                  <i class="fab fa-github" />
                </span>
              </div>
            ) : (
              ""
            )}

            {this.state.contact_twitter ? (
              <div class="col-sm-1">
                <span
                  onClick={() => this.openInNewTab(this.state.contact_twitter)}
                >
                  <i class="fab fa-twitter" />
                </span>
              </div>
            ) : (
              ""
            )}

            {this.state.contact_instagram ? (
              <div class="col-sm-1">
                <span
                  onClick={() =>
                    this.openInNewTab(this.state.contact_instagram)
                  }
                >
                  <i class="fab fa-instagram" />
                </span>
              </div>
            ) : (
              ""
            )}

            {this.state.contact_facebook ? (
              <div class="col-sm-1">
                <span
                  onClick={() => this.openInNewTab(this.state.contact_facebook)}
                >
                  <i class="fab fa-facebook-square" />
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </Zoom>
      </div>
    );
  }
}

export default Contact;
