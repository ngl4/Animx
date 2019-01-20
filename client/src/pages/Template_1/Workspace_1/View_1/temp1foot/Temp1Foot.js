import React, { Component } from "react";
import "./Temp1Foot.css";
import axios from "axios";

class Temp1Foot extends Component {

  state = {
    copyright_name: "",
    copyright_year: ""
  }

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        console.log(res);
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i){
            if (elem.section === "copyright_name"){
              component.setState({
                copyright_name: elem.content,
              });
            }  
            if (elem.section === "copyright_year"){
              component.setState({
                copyright_year: elem.content,
              });
            }    
          });
        }
      })
      .catch(err => console.log(err));
  }

  openInNewTab(url) {
    console.log("This is running!!!");
    const win = window.open(url, "_blank");
    return win;
    //win.focus();
  }

  render() {
    return (
      <footer className="container-fluid-foot">
        <div className="container-txt">
          <p>COPYRIGHT {this.state.copyright_year ? this.state.copyright_year : "2019"} | {this.state.copyright_name ? this.state.copyright_name : "YOUR NAME HERE"}</p>
        </div>
      </footer>
    );
  }
}

export default Temp1Foot;
