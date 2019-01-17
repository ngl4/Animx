import React, { Component } from "react";
import "./about-content.css";

class AboutContent extends Component {

  state = {
    about_title: "",
    about_title_id: "",
    about_textarea: "",
    about_textarea_id: "",
    uploadMessage: "",
    errMessage: "",
    imageUrl: "",
    isAboutSubmit: false
  }

  render() {
    return (
      <div>
        {/* A card contains props for about-image, about-title, about-textarea */}

        <div className="row col-lg-12 mt-5" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">About</h3>
            <hr />
            <div className="row card-text">
              <div className="col-md-5 p-0 d-flex justify-content-end">
                <div className="card w-75 ml-5">
                  <div className="card-body">
                  <p>Profile Image</p>
                    <form>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                          name="myImage"
                          onChange={this.selectImages}
                          multiple
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Choose file
                        </label>
                      </div>
                      <button
                        className="btn btn-warning btn-sm mt-3"
                        type="submit"
                        onClick={this.uploadImage}
                      >
                        Upload
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <form>
                  <div className="form-group">
                    <label for="aboutFormControlInput1" className="ml-0">
                      Title
                    </label>
                    <div className="d-flex justify-content-center">
                      <input
                        name="about_title"
                        value={this.about_title}
                        onChange={this.handleInputChange}
                        className="form-control w-75"
                        id="aboutFormControlInput1"
                        placeholder="About me"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="aboutFormControlTextarea1">Textarea</label>
                    <div className="d-flex justify-content-center">
                      <textarea
                        name="about_textarea"
                        className="form-control w-75"
                        id="aboutFormControlTextarea1"
                        value={this.about_textarea}
                        onChange={this.handleInputChange}
                        rows="5"
                      />
                    </div>
                    {this.isAboutSubmit ? (
                      <button
                        type="button"
                        data-section="about"
                        className="btn btn-primary btn-sm mr-2 ml-2 h-25 mt-5"
                        disabled={
                          !(this.about_title && this.about_textarea)
                        }
                        onClick={this.handleFormEdit}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        type="button"
                        data-section="about"
                        className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                        disabled={
                          !(this.about_title && this.about_textarea)
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
