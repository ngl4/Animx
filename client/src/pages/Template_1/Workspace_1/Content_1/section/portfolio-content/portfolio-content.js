import React, { Component } from "react";
import "./portfolio-content.css";
import PortfolioContentCard from "./portfolioContentCard";
import axios from "axios";

class PortfolioContent extends Component {
  state = {
    portfolio1_title: "",
    portfolio1_title_id: "",
    portfolio1_textarea: "",
    portfolio1_textarea_id: "",
    portfolio2_title: "",
    portfolio2_title_id: "",
    portfolio2_textarea: "",
    portfolio2_textarea_id: "",
    portfolio3_title: "",
    portfolio3_title_id: "",
    portfolio3_textarea: "",
    portfolio3_textarea_id: "",
    portfolio4_title: "",
    portfolio4_title_id: "",
    portfolio4_textarea: "",
    portfolio4_textarea_id: "",
    portfolio5_title: "",
    portfolio5_title_id: "",
    portfolio5_textarea: "",
    portfolio5_textarea_id: "",
    portfolio6_title: "",
    portfolio6_title_id: "",
    portfolio6_textarea: "",
    portfolio6_textarea_id: "",
    uploadMessage: "",
    errMessage: "",
    images: [],
    isPortfolio1Submit: false,
    isPortfolio2Submit: false,
    isPortfolio3Submit: false,
    isPortfolio4Submit: false,
    isPortfolio5Submit: false,
    isPortfolio6Submit: false
  };

  componentDidMount() {
    axios
      .get("/api/displayText")
      .then(res => {
        console.log(res);
        //adding this component variable, we can then access the "this" keyword/object 
        var component = this;
        if (res) {
          res.data.forEach(function(elem, i){
            if (elem.section === "portfolio1_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio1_title_id: elem._id,
                portfolio1_title: elem.content,
                 isPortfolio1Submit: true
              });
            }
            if (elem.section === "portfolio1_textarea"){
              console.log(elem);
              component.setState({
                portfolio1_textarea_id: elem._id,
                portfolio1_textarea: elem.content,
                 isPortfolio1Submit: true
              });
            }
            if (elem.section === "portfolio2_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio2_title_id: elem._id,
                portfolio2_title: elem.content,
                 isPortfolio2Submit: true
              });
            }
            if (elem.section === "portfolio2_textarea"){
              console.log(elem);
              component.setState({
                portfolio2_textarea_id: elem._id,
                portfolio2_textarea: elem.content,
                 isPortfolio2Submit: true
              });
            }
            if (elem.section === "portfolio3_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio3_title_id: elem._id,
                portfolio3_title: elem.content,
                 isPortfolio3Submit: true
              });
            }
            if (elem.section === "portfolio3_textarea"){
              console.log(elem);
              component.setState({
                portfolio3_textarea_id: elem._id,
                portfolio3_textarea: elem.content,
                 isPortfolio3Submit: true
              });
            }
            if (elem.section === "portfolio4_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio4_title_id: elem._id,
                portfolio4_title: elem.content,
                 isPortfolio4Submit: true
              });
            }
            if (elem.section === "portfolio4_textarea"){
              console.log(elem);
              component.setState({
                portfolio4_textarea_id: elem._id,
                portfolio4_textarea: elem.content,
                 isPortfolio4Submit: true
              });
            }
            if (elem.section === "portfolio4_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio4_title_id: elem._id,
                portfolio4_title: elem.content,
                 isPortfolio4Submit: true
              });
            }
            if (elem.section === "portfolio4_textarea"){
              console.log(elem);
              component.setState({
                portfolio4_textarea_id: elem._id,
                portfolio4_textarea: elem.content,
                 isPortfolio4Submit: true
              });
            }
            if (elem.section === "portfolio5_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio5_title_id: elem._id,
                portfolio5_title: elem.content,
                 isPortfolio5Submit: true
              });
            }
            if (elem.section === "portfolio5_textarea"){
              console.log(elem);
              component.setState({
                portfolio5_textarea_id: elem._id,
                portfolio5_textarea: elem.content,
                 isPortfolio5Submit: true
              });
            }
            if (elem.section === "portfolio6_title"){
              console.log(elem);
              console.log(component);
              component.setState({
                portfolio6_title_id: elem._id,
                portfolio6_title: elem.content,
                 isPortfolio6Submit: true
              });
            }
            if (elem.section === "portfolio6_textarea"){
              console.log(elem);
              component.setState({
                portfolio6_textarea_id: elem._id,
                portfolio6_textarea: elem.content,
                 isPortfolio6Submit: true
              });
            }
          });

        } else {
          this.setState({
            isAboutSubmit: false
          });
        }
      })
      .catch(err => console.log(err));

    // axios.get("/api/displayImage").then(response => {
    //   //console.log(response);
    //   //TODO: ADD LOGIC- if image has a section of "about", or "portfolio1", find it and display it
    //   if (response.data.length === 0) {
    //     this.setState({
    //       imageUrl: ""
    //     });
    //   } else {
    //     this.setState({ //TODO: change bucket name 
    //       imageUrl:
    //         "https://s3.amazonaws.com/cindytestbucket456/" +
    //         response.data[0].name
    //     });
    //   }
    // });
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

    if (this.state.portfolio1_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.portfolio1_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio1Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio1_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.portfolio1_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio1Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio2_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.portfolio2_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio2Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio2_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.portfolio2_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio2Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio3_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.portfolio3_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio3Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio3_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.portfolio3_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio3Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio4_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.portfolio4_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio4Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio4_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.portfolio4_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio4Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio5_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.portfolio5_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio5Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio5_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.portfolio5_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio5Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio6_title) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_title",
          type: type + "_title",
          content: this.state.portfolio6_title
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio6Submit: true
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio6_textarea) {
      axios({
        method: "post",
        url: "/api/saveText/" + type,
        params: {
          section: type + "_textarea",
          type: type + "_textarea",
          content: this.state.portfolio6_textarea
        }
      })
        .then(res => {
          console.log(res);
          component.setState({
            isPortfolio6Submit: true
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleFormEdit = event => {
    event.preventDefault();
    var type = event.target.dataset.section;

    if (this.state.portfolio1_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio1_title_id,
          section: type + "_title",
          content: this.state.portfolio1_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio1_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio1_textarea_id,
          section: type + "_textarea",
          content: this.state.portfolio1_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio2_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio2_title_id,
          section: type + "_title",
          content: this.state.portfolio2_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio2_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio2_textarea_id,
          section: type + "_textarea",
          content: this.state.portfolio2_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio3_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio3_title_id,
          section: type + "_title",
          content: this.state.portfolio3_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio3_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio3_textarea_id,
          section: type + "_textarea",
          content: this.state.portfolio3_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio4_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio4_title_id,
          section: type + "_title",
          content: this.state.portfolio4_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio4_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio4_textarea_id,
          section: type + "_textarea",
          content: this.state.portfolio4_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio5_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio5_title_id,
          section: type + "_title",
          content: this.state.portfolio5_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio5_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio5_textarea_id,
          section: type + "_textarea",
          content: this.state.portfolio5_textarea
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio6_title) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio6_title_id,
          section: type + "_title",
          content: this.state.portfolio6_title
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (this.state.portfolio6_textarea) {
      axios({
        method: "put",
        url: "/api/updateText/" + type,
        params: {
          _id: this.state.portfolio6_textarea_id,
          section: type + "_textarea",
          content: this.state.portfolio6_textarea
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
        {/* a card with props -- portfolio-image, portfolio-title, portfolio-textarea */}
        <div className="row col-lg-12" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Portfolio</h3>
            <hr />
            <PortfolioContentCard
              numOfPortfolio="1"
              portfolio_title={this.state.portfolio1_title}
              portfolio_textarea={this.state.portfolio1_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isPortfolioSubmit={this.state.isPortfolio1Submit}
            />
            <PortfolioContentCard
              numOfPortfolio="2"
              portfolio_title={this.state.portfolio2_title}
              portfolio_textarea={this.state.portfolio2_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isPortfolioSubmit={this.state.isPortfolio2Submit}
            />
            <PortfolioContentCard
              numOfPortfolio="3"
              portfolio_title={this.state.portfolio3_title}
              portfolio_textarea={this.state.portfolio3_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isPortfolioSubmit={this.state.isPortfolio3Submit}
            />
            <PortfolioContentCard
              numOfPortfolio="4"
              portfolio_title={this.state.portfolio4_title}
              portfolio_textarea={this.state.portfolio4_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isPortfolioSubmit={this.state.isPortfolio4Submit}
            />
            <PortfolioContentCard
              numOfPortfolio="5"
              portfolio_title={this.state.portfolio5_title}
              portfolio_textarea={this.state.portfolio5_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isPortfolioSubmit={this.state.isPortfolio5Submit}
            />
            <PortfolioContentCard
              numOfPortfolio="6"
              portfolio_title={this.state.portfolio6_title}
              portfolio_textarea={this.state.portfolio6_textarea}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormEdit={this.handleFormEdit}
              handleFormDelete={this.handleFormDelete}
              isPortfolioSubmit={this.state.isPortfolio6Submit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioContent;
