import React, { Component } from "react";
import "./contact-content.css";

class ContactContent extends Component {
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
                      value={this.props.contact_title}
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
                      value={this.props.contact_textarea}
                      onChange={this.handleInputChange}
                      rows="5"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <div className="d-flex justify-content-center">
                  <input
                    type="email"
                    className="form-control w-25"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="form-group">
                  <label for="formGroupExampleInput">LinkedIn</label>
                  <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-25"
                    id="formGroupExampleInput"
                    placeholder="LinkedIn url"
                  />
                  </div>
                </div>

                {/* Github */}
                <div className="form-group">
                  <label for="formGroupExampleInput">Github</label>
                  <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-25"
                    id="formGroupExampleInput"
                    placeholder="Github url"
                  />
                  </div>
                </div>

                {/* Twitter */}
                <div className="form-group">
                  <label for="formGroupExampleInput">Twitter</label>
                  <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-25"
                    id="formGroupExampleInput"
                    placeholder="Twitter url"
                  />
                  </div>
                </div>

                {/* Instagram */}
                <div className="form-group">
                  <label for="formGroupExampleInput">Instagram</label>
                  <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-25"
                    id="formGroupExampleInput"
                    placeholder="Instagram url"
                  />
                  </div>
                </div>

                {/* Facebook */}
                <div className="form-group">
                  <label for="formGroupExampleInput">Facebook</label>
                  <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-25"
                    id="formGroupExampleInput"
                    placeholder="Facebook url"
                  />
                  </div>
                </div>

                {this.props.isContactSubmit ? (
                  <button
                    type="button"
                    data-section="about"
                    className="btn btn-primary btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={
                      !(this.props.about_title && this.props.about_textarea)
                    }
                    onClick={this.handleFormEdit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    data-section="about"
                    className="btn btn-primary btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={
                      !(this.props.about_title && this.props.about_textarea)
                    }
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-secondary btn-sm h-25 mt-5"
                  data-section="about"
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
