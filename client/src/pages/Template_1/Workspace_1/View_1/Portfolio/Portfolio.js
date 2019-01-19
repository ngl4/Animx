import React, { Component } from "react";
import "./Portfolio.css";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";
import five from "../assets/images/five.png";
import six from "../assets/images/six.png";
import Fade from "react-reveal/Fade";
import axios from "axios";

class About extends Component {
  state = {
    //Images
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: "",

    //Texts
    portfolio1_title: "",
    portfolio1_textarea: "",

    portfolio2_title: "",
    portfolio2_textarea: "",

    portfolio3_title: "",
    portfolio3_textarea: "",

    portfolio4_title: "",
    portfolio4_textarea: "",

    portfolio5_title: "",
    portfolio5_textarea: "",

    portfolio6_title: "",
    portfolio6_textarea: ""
  };

  componentDidMount() {
    axios
    .get("/api/displayText")
    .then(res => {
      //adding this component variable, we can then access the "this" keyword/object 
      var component = this;
      if (res) {
        res.data.forEach(function(elem, i){
          if (elem.section === "portfolio1_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio1_title: elem.content,
            });
          }
          if (elem.section === "portfolio1_textarea"){
            console.log(elem);
            component.setState({
              portfolio1_textarea: elem.content,
            });
          }
          if (elem.section === "portfolio2_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio2_title: elem.content,
            });
          }
          if (elem.section === "portfolio2_textarea"){
            console.log(elem);
            component.setState({
              portfolio2_textarea: elem.content,
            });
          }
          if (elem.section === "portfolio3_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio3_title: elem.content,
            });
          }
          if (elem.section === "portfolio3_textarea"){
            console.log(elem);
            component.setState({
              portfolio3_textarea: elem.content,
            });
          }
          if (elem.section === "portfolio4_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio4_title: elem.content,
            });
          }
          if (elem.section === "portfolio4_textarea"){
            console.log(elem);
            component.setState({
              portfolio4_textarea: elem.content,
            });
          }
          if (elem.section === "portfolio4_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio4_title: elem.content,
            });
          }
          if (elem.section === "portfolio4_textarea"){
            console.log(elem);
            component.setState({
              portfolio4_textarea: elem.content,
            });
          }
          if (elem.section === "portfolio5_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio5_title: elem.content,
            });
          }
          if (elem.section === "portfolio5_textarea"){
            console.log(elem);
            component.setState({
              portfolio5_textarea: elem.content,
            });
          }
          if (elem.section === "portfolio6_title"){
            console.log(elem);
            console.log(component);
            component.setState({
              portfolio6_title: elem.content,
            });
          }
          if (elem.section === "portfolio6_textarea"){
            console.log(elem);
            component.setState({
              portfolio6_textarea: elem.content,
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
          if (elem.section === "temp1_portfolio1") {
            component.setState({
              imageUrl1:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp1_portfolio2") {
            component.setState({
              imageUrl2:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp1_portfolio3") {
            component.setState({
              imageUrl3:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp1_portfolio4") {
            component.setState({
              imageUrl4:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp1_portfolio5") {
            component.setState({
              imageUrl5:
                "https://s3.us-east-2.amazonaws.com/animxproject/" + elem.name
            });
          }
          if (elem.section === "temp1_portfolio6") {
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
      <div className="container-fluid">
        <div className="row">
          <div
            class="mx-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div class="col-sm-4">
              <div class="card">
                <Fade left>
                  <div class="card-body">
                    {this.state.imageUrl1 ? (
                      <img
                        src={this.state.imageUrl1}
                        className="responsive-portfolio-img rounded"
                        alt="not available"
                      />
                    ) : (
                      <img
                        className="numbers"
                        id="proj1"
                        alt="project"
                        src={one}
                      />
                    )}
                    <h5 class="card-title">
                      <a href="./" class="projects">
                      {this.state.portfolio1_title ? this.state.portfolio1_title : "Project 1"}    
                      </a>
                    </h5>
                    <p class="card-text">
                        {this.state.portfolio1_textarea ? this.state.portfolio1_textarea : "Elementum tempus egestas sed sed. Accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed euismod nisi porta loremmollis aliquam ut porttitor leo."}   
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <Fade left>
                  <div class="card-body">
                    {this.state.imageUrl2 ? (
                      <img
                        src={this.state.imageUrl2}
                        className="responsive-portfolio-img rounded"
                        alt="not available"
                      />
                    ) : (
                      <img className="numbers" alt="project" src={two} />
                    )}
                    <h5 class="card-title">
                      <a href="./" class="projects">
                      {this.state.portfolio2_title ? this.state.portfolio2_title : "Project 2"}    
                      </a>
                    </h5>
                    <p class="card-text">
                    {this.state.portfolio2_textarea ? this.state.portfolio2_textarea : "Elementum tempus egestas sed sed. Accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed euismod nisi porta loremmollis aliquam ut porttitor leo."}   
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <Fade left>
                  <div class="card-body">
                    {this.state.imageUrl3 ? (
                      <img
                        src={this.state.imageUrl3}
                        className="responsive-portfolio-img rounded"
                        alt="not available"
                      />
                    ) : (
                      <img className="numbers" alt="project" src={three} />
                    )}
                    <h5 class="card-title">
                      <a href="./" class="projects">
                      {this.state.portfolio3_title ? this.state.portfolio3_title : "Project 3"}    
                      </a>
                    </h5>
                    <p class="card-text">
                    {this.state.portfolio3_textarea ? this.state.portfolio3_textarea : "Elementum tempus egestas sed sed. Accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed euismod nisi porta loremmollis aliquam ut porttitor leo."}   
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              className="mx-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div class="col-sm-4">
                <div class="card">
                  <Fade right>
                    <div class="card-body">
                      {this.state.imageUrl4 ? (
                        <img
                          src={this.state.imageUrl4}
                          className="responsive-portfolio-img rounded"
                          alt="not available"
                        />
                      ) : (
                        <img className="numbers" alt="project" src={four} />
                      )}
                      <h5 class="card-title">
                        <a href="./" class="projects">
                        {this.state.portfolio4_title ? this.state.portfolio4_title : "Project 4"}    
                        </a>
                      </h5>
                      <p class="card-text">
                      {this.state.portfolio4_textarea ? this.state.portfolio4_textarea : "Elementum tempus egestas sed sed. Accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed euismod nisi porta loremmollis aliquam ut porttitor leo."}   
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <Fade right>
                    <div class="card-body">
                      {this.state.imageUrl5 ? (
                        <img
                          src={this.state.imageUrl5}
                          className="responsive-portfolio-img rounded"
                          alt="not available"
                        />
                      ) : (
                        <img className="numbers" alt="projects" src={five} />
                      )}
                      <h5 class="card-title">
                        <a href="./" class="projects">
                        {this.state.portfolio5_title ? this.state.portfolio5_title : "Project 5"}    
                        </a>
                      </h5>
                      <p class="card-text">
                      {this.state.portfolio5_textarea ? this.state.portfolio5_textarea : "Elementum tempus egestas sed sed. Accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed euismod nisi porta loremmollis aliquam ut porttitor leo."}   
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <Fade right>
                    <div class="card-body">
                      {this.state.imageUrl6 ? (
                        <img
                          src={this.state.imageUrl6}
                          className="responsive-portfolio-img rounded"
                          alt="not available"
                        />
                      ) : (
                        <img className="numbers" alt="project" src={six} />
                      )}
                      <h5 class="card-title">
                        <a href="./" class="projects">
                        {this.state.portfolio6_title ? this.state.portfolio6_title : "Project 6"}    
                        </a>
                      </h5>
                      <p class="card-text">
                      {this.state.portfolio6_textarea ? this.state.portfolio6_textarea : "Elementum tempus egestas sed sed. Accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed euismod nisi porta loremmollis aliquam ut porttitor leo."}   
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
