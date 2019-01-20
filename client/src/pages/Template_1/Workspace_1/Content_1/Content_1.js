import React, { Component } from "react";
import "./Content_1.css";
import Nav from "../../../../components/Nav";
import AboutContent from "../Content_1/section/about-content";
import PortfolioContent from "../Content_1/section/portfolio-content";
import ContactContent from "../Content_1/section/contact-content";
import CopyrightContent from "../Content_1/section/copyright-content";
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

class Content_1 extends Component {
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
    //win.focus();
  };

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron text-center mb-0">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-around">
              <div />
              <div>{/* <i class="far fa-edit fa-2x"></i> */}</div>
              <div>
                <a
                  href="#Portfolio"
                  className="pb-3 mr-5 ml-5 content-color content-border-bot content-icon-font"
                >
                  <i className="fas fa-angle-double-down mr-1" />
                  Portfolio
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
                  href="/template_1/workspace_1/view_1"
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
          <AboutContent />

          <ScrollableAnchor id={"Portfolio"}>
            <PortfolioContent />
          </ScrollableAnchor>

          <ScrollableAnchor id={"Contact"}>
            <ContactContent />
          </ScrollableAnchor>

          <ScrollableAnchor id={"Copyright"}>
            <CopyrightContent />
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

export default Content_1;
