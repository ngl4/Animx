import React, { Component } from "react";
import TemplateNav from "../../components/TemplateNav";
import "./Template.css";
import axios from "axios";

class Template extends Component {
  state = {
    // template1: "template1",
    // template2: "template2",
    template:"",
    user_id: "",
    user_templates: []

  };

  componentDidMount() {
    axios.get("/user_data")
    .then(response => {
      console.log(response);
      if(response.data.loggedIn){
        this.setState({
          user_id: response.data.user_id,
          user_templates: response.data.user_templates
        })
      }else {
        console.log("no login user stored in session!");
      }
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  selectTemplate = event => {
    event.preventDefault();
    console.log(event.target.value);

    console.log(this.state.user_templates);


    this.setState({
      template: event.target.value
    });
  }

  handleAddTemplate = event => {
    event.preventDefault();
    //console.log(this.state.user_templates);
    if (this.state.user_templates.length === 0) {
       axios.post("/api/addTemplate", {
      type: this.state.template
    }).then(response => {
      console.log(response);
    }).catch(err => 
      console.log(err));

    }else {
      console.log("You have chosen this Template already!")
    }
  }

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
                    <div className="card-text">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="template1"
                          name="template1"
                          onChange={this.selectTemplate}
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Template 1
                        </label>
                      </div>
                    </div>
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
            <div className="text-center">

              <button onClick={this.handleAddTemplate}>Next</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
