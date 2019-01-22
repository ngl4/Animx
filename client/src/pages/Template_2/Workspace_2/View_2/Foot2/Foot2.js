import React, { Component } from "react";
import "./Foot2.css";
import axios from "axios";

class Foot2 extends Component {
  state = {
    copyright_name: "",
    copyright_year: ""
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        //adding this component variable, we can then access the "this" keyword/object
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i) {
            if (elem.section === "copyright2_name") {
              component.setState({
                copyright_name: elem.content
              });
            }
            if (elem.section === "copyright2_year") {
              component.setState({
                copyright_year: elem.content
              });
            }
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <footer className="footer navbar-fixed-bottom mb-0">
        <div className="container-txt">
          <div className="architect-footer">
            {"\u00A9"} COPYRIGHT{" "}
            {this.state.copyright_year ? this.state.copyright_year : "2019"} | {" "}
            {this.state.copyright_name ? this.state.copyright_name : "YOUR NAME HERE"}
          </div>
        </div>
      </footer>
    );
  }
}

export default Foot2;
