import React, { Component } from "react";
import TemplateNav from "../../components/TemplateNav";
import "./Template.css";
import pic1 from "./images/ss1.png";
import pic2 from "./images/ss2.png";


class Template extends Component {
  state = {};

  render() {
    return (
      <div>
        <TemplateNav />
        <div className="jumbotron mt-5 text-center" id="tempPage">
          {/* This is The Template!!! */}

          <h1> Templates </h1>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="card card-size col-md-3 m-3">
                <a href="/template_1/workspace" alt="template_1">
                  <img
                    className="card-img-top"
                    src={pic1}
                    alt="Cardcap 1"
                  />
                  <div className="card-body">
                    <p className="card-text" id="cardT">Template 1 | "In Color"</p>
                    
                  </div>
                </a>
              </div>

          
              <div className="card card-size col-md-3 m-3">
              <a href="/template_2/workspace_2" alt="template_2">
                  <img
                    className="card-img-top"
                    src={pic2}
                    alt="Cardcap 1"
                  />
                <div className="card-body">
                  <p className="card-text" id="cardT">Template 2 | "Black + White"</p>
                </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
