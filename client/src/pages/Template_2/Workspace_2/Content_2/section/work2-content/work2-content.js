import React, { Component } from "react";
import "./work2-content.css";
import WorkContentCard from "./workContentCard";
import axios from "axios";

class WorkContent extends Component {
  //TODO#1: ADD URL LINK TO THE PROJECT (OPTIONAL!!!)
  
  state = {
    work1_title: "",
    work1_title_id: "",
    work1_textarea: "",
    work1_textarea_id: "",

    work2_title: "",
    work2_title_id: "",
    work2_textarea: "",
    work2_textarea_id: "",

    work3_title: "",
    work3_title_id: "",
    work3_textarea: "",
    work3_textarea_id: "",

    work4_title: "",
    work4_title_id: "",
    work4_textarea: "",
    work4_textarea_id: "",

    work5_title: "",
    work5_title_id: "",
    work5_textarea: "",
    work5_textarea_id: "",

    work6_title: "",
    work6_title_id: "",
    work6_textarea: "",
    work6_textarea_id: "",

    errMessage: "",

    images: [],
    image1_id:"",
    image2_id:"",
    image3_id:"",
    image4_id:"",
    image5_id:"",
    image6_id:"",

    imageUrl1:"",
    imageUrl2:"",
    imageUrl3:"",
    imageUrl4:"",
    imageUrl5:"",
    imageUrl6:"",

    isWork1Submit: false,
    isWork2Submit: false,
    isWork3Submit: false,
    isWork4Submit: false,
    isWork5Submit: false,
    isWork6Submit: false,
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        //adding this component variable, we can then access the "this" keyword/object 
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i){
            if (elem.section === "work1_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work1_title_id: elem._id,
                work1_title: elem.content,
                 isWork1Submit: true
              });
            }
            if (elem.section === "work1_textarea"){
              console.log(elem);
              component.setState({
                work1_textarea_id: elem._id,
                work1_textarea: elem.content,
                 isWork1Submit: true
              });
            }
            if (elem.section === "work2_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work2_title_id: elem._id,
                work2_title: elem.content,
                 isWork2Submit: true
              });
            }
            if (elem.section === "work2_textarea"){
              console.log(elem);
              component.setState({
                work2_textarea_id: elem._id,
                work2_textarea: elem.content,
                 isWork2Submit: true
              });
            }
            if (elem.section === "work3_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work3_title_id: elem._id,
                work3_title: elem.content,
                 isWork3Submit: true
              });
            }
            if (elem.section === "work3_textarea"){
              console.log(elem);
              component.setState({
                work3_textarea_id: elem._id,
                work3_textarea: elem.content,
                 isWork3Submit: true
              });
            }
            if (elem.section === "work4_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work4_title_id: elem._id,
                work4_title: elem.content,
                 isWork4Submit: true
              });
            }
            if (elem.section === "work4_textarea"){
              console.log(elem);
              component.setState({
                work4_textarea_id: elem._id,
                work4_textarea: elem.content,
                 isWork4Submit: true
              });
            }
            if (elem.section === "work4_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work4_title_id: elem._id,
                work4_title: elem.content,
                 isWork4Submit: true
              });
            }
            if (elem.section === "work4_textarea"){
              console.log(elem);
              component.setState({
                work4_textarea_id: elem._id,
                work4_textarea: elem.content,
                 isWork4Submit: true
              });
            }
            if (elem.section === "work5_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work5_title_id: elem._id,
                work5_title: elem.content,
                 isWork5Submit: true
              });
            }
            if (elem.section === "work5_textarea"){
              console.log(elem);
              component.setState({
                work5_textarea_id: elem._id,
                work5_textarea: elem.content,
                 isWork5Submit: true
              });
            }
            if (elem.section === "work6_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                work6_title_id: elem._id,
                work6_title: elem.content,
                 isWork6Submit: true
              });
            }
            if (elem.section === "work6_textarea"){
              console.log(elem);
              component.setState({
                work6_textarea_id: elem._id,
                work6_textarea: elem.content,
                 isWork6Submit: true
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
        console.log(response);
        if (response) {
          console.log(response);
          response.data.forEach(function(elem, i) {
            if (elem.section === "temp2_work1") {
              component.setState({
                image1_Id: elem._id,
                imageUrl1:
                  "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
              });
            }
            if (elem.section === "temp2_work2") {
              component.setState({
                image2_Id: elem._id,
                imageUrl2:
                  "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
              });
            }
            if (elem.section === "temp2_work3") {
              component.setState({
                image3_Id: elem._id,
                imageUrl3:
                  "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
              });
            }
            if (elem.section === "temp2_work4") {
              component.setState({
                image4_Id: elem._id,
                imageUrl4:
                  "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
              });
            }
            if (elem.section === "temp2_work5") {
              component.setState({
                image5_Id: elem._id,
                imageUrl5:
                  "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
              });
            }
            if (elem.section === "temp2_work6") {
              component.setState({
                image6_Id: elem._id,
                imageUrl6:
                  "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
              });
            }
          });
        }
      });
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
    const type = event.target.dataset.section;
    console.log(type);
    const uploaders = this.state.images.map(image => {
      const data = new FormData();
      data.append("myImage", image, image.name);

      // Make an AJAX upload request using Axios
      return axios({
        method: "POST",
        url: "/api/uploadimage",
        data: data,
        params: {
          section: type
        }
      })
        .then(response => {
          //console.log(response.data.err);
          if (response.data.err) {
            this.setState({
              errMessage: response.data.err
            });
          } else {
            window.location.reload();
          }
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

  deleteImage = event => {
    event.preventDefault();
    const type = event.target.dataset.section;
    axios.delete("/api/deleteImage/" + type).then(response => {
      console.log(response);
      window.location.reload();
    });
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

    const type = event.target.dataset.section;
    const component = this;

    if (this.state.work1_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.work1_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork1Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work1_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.work1_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork1Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work2_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.work2_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork2Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work2_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.work2_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork2Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work3_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.work3_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork3Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work3_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.work3_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork3Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work4_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.work4_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork4Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work4_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.work4_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork4Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work5_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.work5_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork5Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work5_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.work5_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork5Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work6_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.work6_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork6Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.work6_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.work6_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isWork6Submit: true
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleFormEdit = event => {
    event.preventDefault();
    var type = event.target.dataset.section;

    if (this.state.work1_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work1_title_id,
          section: type + "_title",
          content: this.state.work1_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work1_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work1_textarea_id,
          section: type + "_textarea",
          content: this.state.work1_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work2_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work2_title_id,
          section: type + "_title",
          content: this.state.work2_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work2_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work2_textarea_id,
          section: type + "_textarea",
          content: this.state.work2_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work3_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work3_title_id,
          section: type + "_title",
          content: this.state.work3_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work3_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work3_textarea_id,
          section: type + "_textarea",
          content: this.state.work3_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work4_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work4_title_id,
          section: type + "_title",
          content: this.state.work4_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work4_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work4_textarea_id,
          section: type + "_textarea",
          content: this.state.work4_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work5_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work5_title_id,
          section: type + "_title",
          content: this.state.work5_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work5_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work5_textarea_id,
          section: type + "_textarea",
          content: this.state.work5_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work6_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work6_title_id,
          section: type + "_title",
          content: this.state.work6_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.work6_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.work6_textarea_id,
          section: type + "_textarea",
          content: this.state.work6_textarea
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
        {/* a card with props -- work-image, work-title, work-textarea */}
        <div className="row col-lg-12" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Work</h3>
            <hr />
            <WorkContentCard
              numOfWork="1"
              errMessage = {this.state.errMessage}
              imageUrl = {this.state.imageUrl1}
              selectImages={this.selectImages}
              uploadImage={this.uploadImage}
              deleteImage={this.deleteImage}
              work_title={this.state.work1_title}
              work_textarea={this.state.work1_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isWorkSubmit={this.state.isWork1Submit}
              data_section="temp2_work1"
            />
            <WorkContentCard
              numOfWork="2"
              errMessage = {this.state.errMessage}
              imageUrl = {this.state.imageUrl2}
              selectImages={this.selectImages}
              uploadImage={this.uploadImage}
              deleteImage={this.deleteImage}
              work_title={this.state.work2_title}
              work_textarea={this.state.work2_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isWorkSubmit={this.state.isWork2Submit}
              data_section="temp2_work2"
            />
            <WorkContentCard
              numOfWork="3"
              errMessage = {this.state.errMessage}
              imageUrl = {this.state.imageUrl3}
              selectImages={this.selectImages}
              uploadImage={this.uploadImage}
              deleteImage={this.deleteImage}
              work_title={this.state.work3_title}
              work_textarea={this.state.work3_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isWorkSubmit={this.state.isWork3Submit}
              data_section="temp2_work3"
            />
            <WorkContentCard
              numOfWork="4"
              errMessage = {this.state.errMessage}
              imageUrl = {this.state.imageUrl4}
              selectImages={this.selectImages}
              uploadImage={this.uploadImage}
              deleteImage={this.deleteImage}
              work_title={this.state.work4_title}
              work_textarea={this.state.work4_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isWorkSubmit={this.state.isWork4Submit}
              data_section="temp2_work4"
            />
            <WorkContentCard
              numOfWork="5"
              errMessage = {this.state.errMessage}
              imageUrl = {this.state.imageUrl5}
              selectImages={this.selectImages}
              uploadImage={this.uploadImage}
              deleteImage={this.deleteImage}
              work_title={this.state.work5_title}
              work_textarea={this.state.work5_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isWorkSubmit={this.state.isWork5Submit}
              data_section="temp2_work5"
            />
            <WorkContentCard
              numOfWork="6"
              errMessage = {this.state.errMessage}
              imageUrl = {this.state.imageUrl6}
              selectImages={this.selectImages}
              uploadImage={this.uploadImage}
              deleteImage={this.deleteImage}
              work_title={this.state.work6_title}
              work_textarea={this.state.work6_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isWorkSubmit={this.state.isWork6Submit}
              data_section="temp2_work6"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkContent;
