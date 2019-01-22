import React, { Component } from "react";
import "./Work2.css";
import Nav2 from "../Nav2";
import pic1 from "./images/one.jpg";
import pic2 from "./images/two.jpg";
import pic3 from "./images/three.jpg";
import pic4 from "./images/four.jpg";
import pic5 from "./images/five.jpg";
import pic6 from "./images/six.jpg";
import Zoom from "react-reveal/Zoom";
import Foot2 from "../Foot2";
import axios from "axios";
import Nav from "../../../../../components/Nav";

class Work2 extends Component {
  state = {
    work1_title: "",
    work1_textarea: "",
    work2_title: "",
    work2_textarea: "",
    work3_title: "",
    work3_textarea: "",
    work4_title: "",
    work4_textarea: "",
    work5_title: "",
    work5_textarea: "",
    work6_title: "",
    work6_textarea: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: ""
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        //adding this component variable, we can then access the "this" keyword/object
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i) {
            if (elem.section === "work1_title") {
              component.setState({
                work1_title: elem.content
              });
            }
            if (elem.section === "work1_textarea") {
              component.setState({
                work1_textarea_id: elem._id,
                work1_textarea: elem.content,
                isWork1Submit: true
              });
            }
            if (elem.section === "work2_title") {
              component.setState({
                work2_title: elem.content
              });
            }
            if (elem.section === "work2_textarea") {
              component.setState({
                work2_textarea: elem.content
              });
            }
            if (elem.section === "work3_title") {
              component.setState({
                work3_title: elem.content
              });
            }
            if (elem.section === "work3_textarea") {
              component.setState({
                work3_textarea: elem.content
              });
            }
            if (elem.section === "work4_title") {
              component.setState({
                work4_title: elem.content
              });
            }
            if (elem.section === "work4_textarea") {
              component.setState({
                work4_textarea: elem.content
              });
            }
            if (elem.section === "work4_title") {
              component.setState({
                work4_title: elem.content
              });
            }
            if (elem.section === "work4_textarea") {
              component.setState({
                work4_textarea: elem.content
              });
            }
            if (elem.section === "work5_title") {
              component.setState({
                work5_title: elem.content
              });
            }
            if (elem.section === "work5_textarea") {
              component.setState({
                work5_textarea: elem.content
              });
            }
            if (elem.section === "work6_title") {
              component.setState({
                work6_title: elem.content
              });
            }
            if (elem.section === "work6_textarea") {
              component.setState({
                work6_textarea: elem.content
              });
            }
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
              imageUrl1:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp2_work2") {
            component.setState({
              imageUrl2:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp2_work3") {
            component.setState({
              imageUrl3:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp2_work4") {
            component.setState({
              imageUrl4:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp2_work5") {
            component.setState({
              imageUrl5:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp2_work6") {
            component.setState({
              imageUrl6:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
        });
      }
    });
  }
  render() {
    return (
      <div className="gallery">
      <Nav
            contentUrl="/template_2/workspace_2/content_2"
            viewUrl="/template_2/workspace_2/view_2"
          />
        <Zoom Cascade>
          
          <Nav2 />

          <div className="gallery" id="fontStyle">
            <div className="row">
              <div className="col-sm-4">
                {this.state.imageUrl1 ? (
                  <img src={this.state.imageUrl1} alt="1" className="image-work-responsive" />
                ) : (
                  <img src={pic1} alt="1" className="image" />
                )}
                <h5 className="card-title">
                  {this.state.work1_title ? this.state.work1_title : "DESIGN 1"}
                </h5>
                {this.state.work1_textarea
                  ? this.state.work1_textarea
                  : "Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Dignissim suspendisse in estante in nibh mauris cursus."}
              </div>

              <div class="col-sm-4">
                {this.state.imageUrl2 ? (
                  <img src={this.state.imageUrl2} alt="2" className="image-work-responsive" />
                ) : (
                  <img src={pic2} alt="2" className="image" />
                )}
                <h5 className="card-title">
                  {this.state.work2_title ? this.state.work2_title : "DESIGN 2"}
                </h5>
                {this.state.work2_textarea
                  ? this.state.work2_textarea
                  : "Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Dignissim suspendisse in estante in nibh mauris cursus."}
              </div>

              <div class="col-sm-4">
                {this.state.imageUrl3 ? (
                  <img src={this.state.imageUrl3} alt="3" className="image-work-responsive" />
                ) : (
                  <img src={pic3} alt="3" className="image" />
                )}
                <h5 className="card-title">
                  {this.state.work3_title ? this.state.work3_title : "DESIGN 3"}
                </h5>
                {this.state.work3_textarea
                  ? this.state.work3_textarea
                  : "Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Dignissim suspendisse in estante in nibh mauris cursus."}
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                {this.state.imageUrl4 ? (
                  <img src={this.state.imageUrl4} alt="4" className="image-work-responsive" />
                ) : (
                  <img src={pic4} alt="4" className="image" />
                )}
                <h5 className="card-title">
                  {this.state.work4_title ? this.state.work4_title : "DESIGN 4"}
                </h5>
                {this.state.work4_textarea
                  ? this.state.work4_textarea
                  : "Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Dignissim suspendisse in estante in nibh mauris cursus."}
              </div>

              <div class="col-sm-4">
                {this.state.imageUrl5 ? (
                  <img src={this.state.imageUrl5} alt="5" className="image-work-responsive" />
                ) : (
                  <img src={pic5} alt="5" className="image" />
                )}
                <h5 className="card-title">
                  {this.state.work5_title ? this.state.work5_title : "DESIGN 5"}
                </h5>
                {this.state.work5_textarea
                  ? this.state.work5_textarea
                  : "Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Dignissim suspendisse in estante in nibh mauris cursus."}
              </div>

              <div class="col-sm-4">
                {this.state.imageUrl6 ? (
                  <img src={this.state.imageUrl6} alt="6" className="image-work-responsive" />
                ) : (
                  <img src={pic6} alt="6" className="image" />
                )}
                <h5 className="card-title">
                  {this.state.work6_title ? this.state.work6_title : "DESIGN 6"}
                </h5>
                {this.state.work6_textarea
                  ? this.state.work6_textarea
                  : "Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Dignissim suspendisse in estante in nibh mauris cursus."}
              </div>
            </div>
          </div>
        </Zoom>
        <div className="foot">
          {" "}
          <Foot2 />
        </div>
      </div>
    );
  }
}

export default Work2;
