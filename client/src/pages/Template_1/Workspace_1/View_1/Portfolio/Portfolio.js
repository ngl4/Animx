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
    //TODO: Display Text

    //TODO: Display Images
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
                        Project 1
                      </a>
                    </h5>
                    <p class="card-text">
                      Elementum tempus egestas sed sed. Accumsan sit amet nulla
                      facilisi. Lorem dolor sed viverra ipsum nunc aliquet
                      bibendum enim facilisis. Sed euismod nisi porta lorem
                      mollis aliquam ut porttitor leo.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <Fade left>
                  <div class="card-body">
                    <img className="numbers" alt="project" src={two} />
                    <h5 class="card-title">
                      <a href="./" class="projects">
                        Project 2
                      </a>
                    </h5>
                    <p class="card-text">
                      Id ornare arcu odio ut sem nulla. Viverra maecenas
                      accumsan lacus vel facilisis volutpat est velit egestas.
                      Morbi leo urna molestie at elementum eu. Nisl condimentum
                      id venenatis a condimentum vitae sapien.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <Fade left>
                  <div class="card-body">
                    <img className="numbers" alt="project" src={three} />
                    <h5 class="card-title">
                      <a href="./" class="projects">
                        Project 3
                      </a>
                    </h5>
                    <p class="card-text">
                      Neque ornare aenean euismod elementum nisi. Sapien
                      pellentesque habitant morbi tristique.Malesuada fames ac
                      turpis egestas. Lectus quam id leo in vitae turpis massa
                      sed. Risus nullam eget felis eget nunc lobortis.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="mx-5" style={{ display: "flex", justifyContent: "center" }}>   
              <div class="col-sm-4">
                <div class="card">
                  <Fade right>
                    <div class="card-body">
                      <img className="numbers" alt="project" src={four} />
                      <h5 class="card-title">
                        <a href="./" class="projects">
                          Project 4
                        </a>
                      </h5>
                      <p class="card-text">
                        In ante metus dictum at. Tincidunt dui ut ornare lectus.
                        Sed lectus vestibulum mattis ullamcorper. In iaculis
                        nunc sed augue lacus viverra vitae. Nunc sed velit
                        dignissim sodales ut eu sem integer vitae.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <Fade right>
                    <div class="card-body">
                      <img className="numbers" alt="projects" src={five} />
                      <h5 class="card-title">
                        <a href="./" class="projects">
                          Project 5
                        </a>
                      </h5>
                      <p class="card-text">
                        Gravida rutrum quisque non tellus orci ac. Adipiscing
                        enim eu turpis egestas pretium aenean. Aliquet nec
                        ullamcorper sit amet risus nullam eget felis. At
                        consectetur lorem donec massa sapien faucibus.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <Fade right>
                    <div class="card-body">
                      <img className="numbers" alt="project" src={six} />
                      <h5 class="card-title">
                        <a href="./" class="projects">
                          Project 6
                        </a>
                      </h5>
                      <p class="card-text">
                        Tellus orci ac auctor augue mauris augue neque
                        gravida.Orci phasellus egestas tellus rutrum tellus
                        pellentesque eu. Nulla aliquet enim tortor at auctor
                        urna nunc id. Faucibus in ornare quam viverra.
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
