import React, { Component } from "react";
import "./Content_1.css";
import Nav from "../../../../components/Nav";
import AboutContent from "../Content_1/section/about-content";
import PortfolioContent from "../Content_1/section/portfolio-content";
import ContactContent from "../Content_1/section/contact-content";

class Content_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron mt-5 text-center mb-0">
          This is where you UPLOAD contents!!!
          <hr />

        {/* please do all the uploads insdie of their own content section */}
          <AboutContent />
          <PortfolioContent />
          <ContactContent />

        {/* Add copyright content input here!!! */}

        </div>
      </div>
    );
  }
}

export default Content_1;
