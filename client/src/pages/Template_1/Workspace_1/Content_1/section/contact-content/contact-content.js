import React, { Component } from "react";
import "./contact-content.css";
import axios from "axios";

class ContactContent extends Component {
  state = {
    contact_title: "",
    contact_title_id: "",
    contact_textarea: "",
    contact_textarea_id: "",
    contact_email:"",
    contact_email_id:"",
    contact_linkedin:"",
    contact_linkedin_id:"",
    contact_github:"",
    contact_github_id:"",
    contact_twitter:"",
    contact_twitter_id:"",
    contact_instagram:"",
    contact_instagram_id:"",
    contact_facebook:"",
    contact_facebook_id:"",
    isContactSubmit: false
  }

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        console.log(res);
        //adding this component variable, we can then access the "this" keyword/object 
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i){
            if (elem.section === "contact_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                contact_title_id: elem._id,
                contact_title: elem.content,
                 isContactSubmit: true
              });
            }
            if (elem.section === "contact_textarea"){
              console.log(elem);
              component.setState({
                contact_textarea_id: elem._id,
                contact_textarea: elem.content,
                 isContactSubmit: true
              });
            }
            if (elem.section === "contact_email"){
              console.log(elem);
              component.setState({
                contact_email_id: elem._id,
                contact_email: elem.content,
                 isContactSubmit: true
              });
            }

            if (elem.section === "contact_github"){
              console.log(elem);
              component.setState({
                contact_github_id: elem._id,
                contact_github: elem.content,
                 isContactSubmit: true
              });
            }
            if (elem.section === "contact_linkedin"){
              console.log(elem);
              component.setState({
                contact_linkedin_id: elem._id,
                contact_linkedin: elem.content,
                 isContactSubmit: true
              });
            }
            if (elem.section === "contact_twitter"){
              console.log(elem);
              component.setState({
                contact_twitter_id: elem._id,
                contact_twitter: elem.content,
                 isContactSubmit: true
              });
            }
            if (elem.section === "contact_instagram"){
              console.log(elem);
              component.setState({
                contact_instagram_id: elem._id,
                contact_instagram: elem.content,
                 isContactSubmit: true
              });
            }
            if (elem.section === "contact_facebook"){
              console.log(elem);
              component.setState({
                contact_facebook_id: elem._id,
                contact_facebook: elem.content,
                 isContactSubmit: true
              });
            }
            
          });

        } else {
          this.setState({
            isContactSubmit: false
          });
        }
      })
      .catch(err => console.log(err));

    // axios.get("/api/displayImage").then(response => {
    //   //console.log(response);
    //   //TODO: ADD LOGIC- if image has a section of "about", or "portfolio1", find it and display it
    //   if (response.data.length === 0) {
    //     this.setState({
    //       imageUrl: ""
    //     });
    //   } else {
    //     this.setState({ //TODO: change bucket name 
    //       imageUrl:
    //         "https://s3.amazonaws.com/cindytestbucket456/" +
    //         response.data[0].name
    //     });
    //   }
    // });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("this is clicked!");

    const type = event.target.dataset.section;
    const component = this;

    if (this.state.contact_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.contact_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.contact_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_email) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_email",
          type: type + "_email",
          content: this.state.contact_email
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_github) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_github",
          type: type + "_github",
          content: this.state.contact_github
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_linkedin) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_linkedin",
          type: type + "_linkedin",
          content: this.state.contact_linkedin
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_twitter) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_twitter",
          type: type + "_twitter",
          content: this.state.contact_twitter
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_instagram) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_instagram",
          type: type + "_instagram",
          content: this.state.contact_instagram
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_facebook) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_facebook",
          type: type + "_facebook",
          content: this.state.contact_facebook
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isContactSubmit: true
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleFormEdit = event => {
    event.preventDefault();
    var type = event.target.dataset.section;

    if (this.state.contact_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_title_id,
          section: type + "_title",
          content: this.state.contact_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_textarea_id,
          section: type + "_textarea",
          content: this.state.contact_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_email) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_email_id,
          section: type + "_email",
          content: this.state.contact_email
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_github) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_github_id,
          section: type + "_github",
          content: this.state.contact_github
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_linkedin) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_linkedin_id,
          section: type + "_linkedin",
          content: this.state.contact_linkedin
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_twitter) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_twitter_id,
          section: type + "_twitter",
          content: this.state.contact_twitter
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_instagram) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_instagram_id,
          section: type + "_instagram",
          content: this.state.contact_instagram
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.contact_facebook) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.contact_facebook_id,
          section: type + "_facebook",
          content: this.state.contact_facebook
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

  handleFormDelete = event => {
    const type = event.target.dataset.section;
    // debugger;
    event.preventDefault();
    // console.log(event);
    axios.delete("/api/deleteText/" + type).then(response => {
      console.log(response);
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        {/* A card contains props --- contact-title, contact-textarea, contact-email, contact-linkedin, contact-github, contact-twitter, contact-instagram, contact-facebook */}
        {/* if the social media has links, then show the icon and the link as well */}

        <div className="row col-lg-12 mt-5" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Contact</h3>
            <hr />
            <p className="card-text">
              <form>
                <div className="form-group">
                  <label for="contactFormControlInput1">Title</label>
                  <div className="d-flex justify-content-center">
                    <input
                      name="contact_title"
                      value={this.state.contact_title}
                      onChange={this.handleInputChange}
                      className="form-control w-50"
                      id="contactFormControlInput1"
                      placeholder="Contact Me"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="contactFormControlTextarea1">Textarea</label>
                  <div className="d-flex justify-content-center">
                    <textarea
                      name="contact_textarea"
                      className="form-control w-50"
                      id="contactFormControlTextarea1"
                      value={this.state.contact_textarea}
                      onChange={this.handleInputChange}
                      rows="5"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlfor="exampleInputEmail1">Email address</label>
                  <div className="d-flex justify-content-center">
                    <input
                      type="email"
                      name="contact_email"
                      value={this.state.contact_email}
                      onChange={this.handleInputChange}
                      className="form-control w-25"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="form-group">
                  <label htmlfor="formGroupExampleInput">LinkedIn</label>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      name="contact_linkedin"
                      value={this.state.contact_linkedin}
                      onChange={this.handleInputChange}
                      className="form-control w-25"
                      id="formGroupExampleInput"
                      placeholder="LinkedIn url"
                    />
                  </div>
                </div>

                {/* Github */}
                <div className="form-group">
                  <label htmlfor="formGroupExampleInput">Github</label>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      name="contact_github"
                      value={this.state.contact_github}
                      onChange={this.handleInputChange}
                      className="form-control w-25"
                      id="formGroupExampleInput"
                      placeholder="Github url"
                    />
                  </div>
                </div>

                {/* Twitter */}
                <div className="form-group">
                  <label htmlfor="formGroupExampleInput">Twitter</label>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      name="contact_twitter"
                      value={this.state.contact_twitter}
                      onChange={this.handleInputChange}
                      className="form-control w-25"
                      id="formGroupExampleInput"
                      placeholder="Twitter url"
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div className="form-group">
                  <label htmlfor="formGroupExampleInput">Instagram</label>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      name="contact_instagram"
                      value={this.state.contact_instagram}
                      onChange={this.handleInputChange}
                      className="form-control w-25"
                      id="formGroupExampleInput"
                      placeholder="Instagram url"
                    />
                  </div>
                </div>

                {/* Facebook */}
                <div className="form-group">
                  <label htmlfor="formGroupExampleInput">Facebook</label>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      name="contact_facebook"
                      value={this.state.contact_facebook}
                      onChange={this.handleInputChange}
                      className="form-control w-25"
                      id="formGroupExampleInput"
                      placeholder="Facebook url"
                    />
                  </div>
                </div>

                {this.state.isContactSubmit ? (
                  <button
                    type="button"
                    data-section="contact"
                    className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={
                      !(this.state.contact_title && this.state.contact_textarea)
                    }
                    onClick={this.handleFormEdit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    data-section="contact"
                    className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={
                      !(this.state.contact_title && this.state.contact_textarea)
                    }
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-secondary btn-sm h-25 mt-5"
                  data-section="contact"
                  onClick={this.handleFormDelete}
                >
                  Delete All
                </button>
              </form>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
