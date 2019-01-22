import React, { Component } from "react";
import "./Content_2.css";
import Nav from "../../../../components/Nav";
import About2Content from "../Content_2/section/about2-content";
import Work2Content from "../Content_2/section/work2-content";
import Contact2Content from "../Content_2/section/contact2-content";
import Copyright2Content from "../Content_2/section/copyright2-content";
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollBtn from "../../../../components/ScrollBtn/ScrollBtn";

const scroll = {
  opacity: "0.9",
  backgroundColor: "#F7DC6F",
  width: "40px",
  height: "40px",
  position: "fixed",
  bottom: "10px",
  right: "10px",
  borderRadius: "5px",
  border: "none"
};

const arrowUp = {
  color: "#34495E",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-9px",
  marginLeft: "-5px"
};

class Content_2 extends Component {
  state = {
    isTop: true,
    intervalId: 0,
    scrollStepInPx: 50,
    delayInMs: 16.66
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 850;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
    console.log(window.innerWidth);
  }

  openInNewTab = url => {
    const win = window.open(url, "_blank");
    return win;
  };

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_2/workspace_2/content_2"
          viewUrl="/template_2/workspace_2/view_2"
        />
        <div className="jumbotron text-center mb-0">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-around">
              <div />
              <div>{/* <i class="far fa-edit fa-2x"></i> */}</div>
              <div>
                <a
                  href="#Work"
                  className="pb-3 mr-5 ml-5 content-color content-border-bot content-icon-font"
                >
                  <i className="fas fa-angle-double-down mr-1" />
                  Work
                </a>
                <a
                  href="#Contact"
                  className="pb-3 mr-5 content-color content-border-bot content-icon-font"
                >
                  <i className="fas fa-angle-double-down mr-1" />
                  Contact
                </a>
                <a
                  href="#Copyright"
                  className="pb-3 mr-5 content-color content-border-bot content-icon-font"
                >
                  <i className="fas fa-angle-double-down mr-1" />
                  Copyright
                </a>
                <a
                  href="/template"
                  className="pb-3 mr-5 content-color content-border-bot content-icon-font"
                >
                  <i class="fab fa-connectdevelop mr-1" />
                  Templates
                </a>
                <a
                  href="/template_2/workspace_2/view_2"
                  className="pb-3 mr-5 content-color content-border-bot content-icon-font"
                >
                  <i class="fas fa-file-powerpoint mr-1" />
                  Preview
                </a>
                <a
                  href="#"
                  // onClick={this.openInNewTab("/template_1/workspace_1/publish_1")}
                  className="pb-3 mr-5 content-color content-border-bot content-icon-font"
                >
                  <i class="fas fa-globe mr-1" />
                  Publish
                </a>
                <hr className="hr-position" />
              </div>
              {/* <hr className="container hr-position"/> */}
            </div>
          </div>

          {/* please do all the uploads insdie of their own content section */}
          <About2Content />

          <ScrollableAnchor id={"Work"}>
            <Work2Content />
          </ScrollableAnchor>

          <ScrollableAnchor id={"Contact"}>
            <Contact2Content />
          </ScrollableAnchor>

          <ScrollableAnchor id={"Copyright"}>
            <Copyright2Content />
          </ScrollableAnchor>

          {/* Add copyright content input here!!! */}
        </div>
        {this.state.isTop ? (
          ""
        ) : (
          <ScrollBtn
            scrollStepInPx="90"
            delayInMs="16.66"
            scroll={scroll}
            arrowUp={arrowUp}
          />
        )}
      </div>
    );
  }
}

export default Content_2;
