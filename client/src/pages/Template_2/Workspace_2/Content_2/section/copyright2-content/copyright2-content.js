import React, { Component } from "react";
import "./copyright2-content.css";
import axios from "axios";

class CopyrightContent extends Component {
  state = {
    copyright_name: "",
    copyright_name_id: "",
    copyright_year: "",
    copyright_year_id: "",
    isCopyrightSubmit: false
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        console.log(res);
        //adding this component variable, we can then access the "this" keyword/object
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i) {
            if (elem.section === "copyright2_name") {
              console.log(elem);
              console.log(component);
              component.setState({
                copyright_name_id: elem._id,
                copyright_name: elem.content,
                isCopyrightSubmit: true
              });
            }
            if (elem.section === "copyright2_year") {
                console.log(elem);
                console.log(component);
                component.setState({
                  copyright_year_id: elem._id,
                  copyright_year: elem.content,
                  isCopyrightSubmit: true
                });
              }
          });
        } else {
          this.setState({
            isCopyrightSubmit: false
          });
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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("this is clicked!");

    const type = event.target.dataset.section;
    const component = this;

    if (this.state.copyright_name) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_name",
          type: type + "_name",
          content: this.state.copyright_name
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isCopyrightSubmit: true
          });
        })
        .catch(err => console.log(err));
    }

    if (this.state.copyright_year) {
        axios({
          method: "post",
          url: "/api/saveText/" + type,
          params: {
            section: type + "_year",
            type: type + "_year",
            content: this.state.copyright_year
          }
        })
          .then(res => {
            console.log(res);
            component.setState({
              isCopyrightSubmit: true
            });
          })
          .catch(err => console.log(err));
      }
  };

  handleFormEdit = event => {
    event.preventDefault();
    var type = event.target.dataset.section;

    if (this.state.copyright_name) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.copyright_name_id,
          section: type + "_name",
          content: this.state.copyright_name
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }

    if (this.state.copyright_year) {
        axios({
          method: "put",
          url: "/api/updateText/" + type,
          params: {
            _id: this.state.copyright_year_id,
            section: type + "_year",
            content: this.state.copyright_year
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
        <div className="row col-lg-12 mt-2" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Copyright</h3>
            <hr />
            <p className="card-text">
              <form>
                <div className="form-group">
                  <label for="copyrightFormControlInput1">Name</label>
                  <div className="d-flex justify-content-center">
                    <input
                      name="copyright_name"
                      value={this.state.copyright_name}
                      onChange={this.handleInputChange}
                      className="form-control w-50"
                      id="copyrightFormControlInput1"
                      placeholder="Copyright name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="copyrightFormControlInput1">Year</label>
                  <div className="d-flex justify-content-center">
                    <input
                      name="copyright_year"
                      value={this.state.copyright_year}
                      onChange={this.handleInputChange}
                      className="form-control w-50"
                      id="copyrightFormControlInput1"
                      placeholder="Copyright year"
                    />
                  </div>
                </div>

                {this.state.isCopyrightSubmit ? (
                  <button
                    type="button"
                    data-section="copyright2"
                    className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={!this.state.copyright_name && this.state.copyright_year}
                    onClick={this.handleFormEdit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    data-section="copyright2"
                    className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={!this.state.copyright_name && this.state.copyright_year}
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-secondary btn-sm h-25 mt-5"
                  data-section="copyright2"
                  onClick={this.handleFormDelete}
                >
                  Delete All
                </button>
              </form>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyrightContent;
