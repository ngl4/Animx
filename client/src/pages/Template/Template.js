import React, { Component } from "react";
import TemplateNav from "../../components/TemplateNav";
import "./Template.css";

class Template extends Component {
  state = {};

  render() {
    return (
      <div>
        <TemplateNav />
        <div className="jumbotron mt-5 text-center">
          {/* This is The Template!!! */}

          <h1> Templates </h1>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="card card-size col-md-3 m-2">
                <a href="/template_1/workspace" alt="template_1">
                  <img
                    className="card-img-top"
                    src="./images/templates.png"
                    alt="Cardcap 1"
                  />
                  <div className="card-body">
                    <p className="card-text">Template 1</p>
                  </div>
                </a>
              </div>

          
              <div className="card card-size col-md-3 m-2">
              <a href="/template_2/workspace_2" alt="template_2">
                  <img
                    className="card-img-top"
                    src="./images/templates.png"
                    alt="Cardcap 1"
                  />
                <div className="card-body">
                  <p className="card-text">Template 2</p>
                </div>
                </a>
              </div>

              <div className="card card-size col-md-3 m-2">
                <img className="card-img-top" src="" alt="Cardcap 3" />
                <div className="card-body">
                  <p className="card-text">Template 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
