import React, { Component } from "react";
import TemplateNav from "../../components/TemplateNav";

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

          <div className="container row d-flex justify-content-around">
            <div className="card col-md-3 m-2">
              <img className="card-img-top" src="./images/templates.png" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Template 1
                </p>
              </div>
            </div>

            <div className="card card-size col-md-3 m-2">
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Template 2
                </p>
              </div>
            </div>

            <div className="card card-size col-md-3 m-2">
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Template 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
