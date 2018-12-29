import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Upload.css";
import Nav from "../../components/Nav";
// import API from "../../utils/API";
// import BearCard from "../../components/BearCard";
const BASE_URL = "http://localhost:3000/";

class Upload extends Component {
  state = {
    score: 0,
    topScore: 0,
    array: [],
    guessedCorrect: true,
    images: [],
    imageUrls: [],
    imageUrl: "",
    message: "",
    errMessage: "",
    uploadMessage: ""
  };

  

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClickImage = elem => {
    //console.log(elem);
    var newArray = [...this.state.array];

    if (newArray.length === 0) {
      newArray.push(elem);
      this.setState({
        guessedCorrect: true
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1,
          array: newArray,
          guessedCorrect: true
        });
        console.log("%cyou guessed correctly", "color: green");
      } else {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore,
          array: newArray
        });
        console.log("%cyou guessed correctly", "color: green");
      }
    } else {
      const found = newArray.includes(elem);

      if (!found) {
        newArray.push(elem);
        if (this.state.score >= this.state.topScore) {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            array: newArray,
            guessedCorrect: true
          });
          console.log("%cyou guessed correctly", "color: green");
        } else {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore,
            array: newArray,
            guessedCorrect: true
          });
          console.log("%cyou guessed correctly", "color: green");
        }
      } else {
        this.setState({
          score: 0,
          topScore: this.state.topScore,
          array: [],
          guessedCorrect: false
        });
        console.log("%cyou guessed incorrectly", "color: red");
      }
    }

    console.log(newArray);
  };

  selectImages = event => {
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/));
    let message = `${images.length} valid image(s) selected`;
    // console.log(images);
    // console.log(message);
    this.setState({ 
      images: images, 
      message: message });
  };

  uploadImages = event => {
    event.preventDefault();
    console.log(this.state.images);
    console.log(this.state.message);
    const uploaders = this.state.images.map(image => {
      const data = new FormData();
      data.append("myImage", image, image.name);
       console.log(data);

      // Make an AJAX upload request using Axios
      return axios.post(BASE_URL + 'api/upload', data).then(response => {
        console.log(response);
        if (response.data.name === "MulterError"){
          this.setState({
            errMessage: response.data.message
          });
        }else {
        this.setState({
          // imageUrls: [response.data.path, ...this.state.imageUrls],
          uploadMessage: "File(s) Uploaded!",
          imageUrl: "uploads/" + response.data.filename
        });

      }
      }).catch(err => console.log(err));
    });
    // Once all the files are uploaded
    axios
      .all(uploaders)
      .then(() => {
        console.log("done");
      })
      .catch(err => alert(err.message + " and each upload file limit is 2mb"));
  };

  render() {
    //let msg;
    // if (typeof msg != undefined) {
    //    msg;
    // }else {
    //     "";
    // }

    return (
      <div>
        <div className="wrapper">
          {/* Sticky Header: Name(link), state, Score and Top Score */}
          <header className="bg-danger p-4 fixed-top">
            <div className="container d-flex justify-content-between text-white font-weight-bold">
              <Nav />
              <div className="header-title">Clickling Game</div>
              {/* <div className="header-midtitle"></div> */}
              <div className="header-scoretitle">
                Score: {this.state.score} | Top Score: {this.state.topScore}{" "}
              </div>
            </div>
          </header>

          {/* Heading */}
          <div className="jumbotron jumbotron-fluid mt-5 heading-background text-white">
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4">
                <strong>Upload Contents Here </strong>
              </h1>
              <p className="lead" />
            </div>
          </div>

          {/* Content: Clicky boxes- upload images */}
          <div className="container">
          {this.state.errMessage ? <p className="text-danger">{this.state.errMessage}</p> : ""}
          {this.state.uploadMessage ? <p className="text-success">{this.state.uploadMessage}</p> : ""}
          </div>
          <div className="container clicky-wrap">
            {/* <p>{typeof msg !== undefined ? msg : ""}</p> */}
            <form>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  name="myImage"
                  onChange={this.selectImages}
                  multiple
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
              <button
                className="btn btn-danger mt-3"
                type="submit"
                onClick={this.uploadImages}
              >
                Upload
              </button>
            </form>
    

          <div className="row col-lg-12 mt-5">
            {/* {this.state.imageUrls.map((url, i) => (
              <div className="col-lg-2" key={i}>
                <img
                  src={BASE_URL + "/" + url}
                  className="img-rounded img-responsive"
                  alt="not available"
                />
                <br />
              </div>
            ))} */}
            {this.state.imageUrl ? <img src={this.state.imageUrl} className="img-rounded img-responsive"
                  alt="not available" 
                /> : ""}
            
          </div>

          <div className="row col-lg-12 mt-5">

            <Link to="/display">
            <button className="btn btn-success">See Preview Page</button>
            </Link>

          </div>

          </div>

          {/* Footer - force bottom */}
          <footer className="container-fluid bg-danger text-white p-3">
            <div className="container">
              <p>Copyright 2018 React Clickling Game</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Upload;


//uploads/myImage-1546024131707.jpeg
