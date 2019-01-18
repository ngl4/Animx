import React, { Component } from "react";
import "./about-content.css";
import axios from "axios";

class AboutContent extends Component {

  state = {
    about_title: "",
    about_title_id: "",
    about_textarea: "",
    about_textarea_id: "",
    uploadMessage: "",
    errMessage: "",
    images: [],
    imageUrl: "",
    isAboutSubmit: false
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
            if (elem.section === "about_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                about_title_id: elem._id,
                about_title: elem.content,
                 isAboutSubmit: true
              });
            }
            if (elem.section === "about_textarea"){
              console.log(elem);
              component.setState({
                about_textarea_id: elem._id,
                about_textarea: elem.content,
                 isAboutSubmit: true
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

  selectImages = event => {
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/));

    this.setState({
      images: images
    });
  };

  uploadImage = event => {
    event.preventDefault();
    const uploaders = this.state.images.map(image => {
      const data = new FormData();
      data.append("aboutImage", image, image.name);
      console.log(image);

      // Make an AJAX upload request using Axios
      return axios
        .post("/api/uploadimage", data)
        .then(response => {
          console.log(response);
          this.setState({
            imageUrl: response.data
          });
        })
        .catch(err => console.log(err));
    });

    // Once all the files are uploaded
    axios
      .all(uploaders)
      .then(() => {
        console.log("done");
      })
      .catch(err => alert(err.message + " and each upload file limit is 2mb"));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("this is clicked!");
    console.log(this.state.about_title);
    console.log(this.state.about_textarea);

    const type = event.target.dataset.section;
    const component = this;

    if (this.state.about_title) {

      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.about_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isAboutSubmit: true
          });

        })
        .catch(err => console.log(err));

    }
    if (this.state.about_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.about_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isAboutSubmit: true
          });
        })
        .catch(err => console.log(err));
    }

  };

  handleFormEdit = event => {
    event.preventDefault();
    var type = event.target.dataset.section

    if (this.state.about_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.about_title_id,
          section: type + "_title",
          content: this.state.about_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.about_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.about_textarea_id,
          section: type + "_textarea",
          content: this.state.about_textarea
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
                    <label htmlFor="aboutFormControlInput1" className="ml-0">
                      Title
                    </label>
                    <div className="d-flex justify-content-center">
                      <input
                        name="about_title"
                        value={this.state.about_title}
                        onChange={this.handleInputChange}
                        className="form-control w-75"
                        id="aboutFormControlInput1"
                        placeholder="About me"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="aboutFormControlTextarea1">Textarea</label>
                    <div className="d-flex justify-content-center">
                      <textarea
                        name="about_textarea"
                        className="form-control w-75"
                        id="aboutFormControlTextarea1"
                        value={this.state.about_textarea}
                        onChange={this.handleInputChange}
                        rows="5"
                      />
                    </div>
                    {this.state.isAboutSubmit ? (
                      <button
                        type="button"
                        data-section="about"
                        className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                        disabled={
                          !(this.state.about_title && this.state.about_textarea)
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
                          !(this.state.about_title && this.state.about_textarea)
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
