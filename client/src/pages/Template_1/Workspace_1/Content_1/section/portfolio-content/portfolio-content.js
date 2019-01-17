import React, { Component } from "react";
import "./portfolio-content.css";
import PortfolioContentCard from "./portfolioContentCard"

class PortfolioContent extends Component {

    state ={
    }


  render() {
    return (
      <div>
        {/* a card with props -- portfolio-image, portfolio-title, portfolio-textarea */}
        <div className="row col-lg-12" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Portfolio</h3>
            <hr />
            <PortfolioContentCard numOfPortfolio="1" />
            <PortfolioContentCard numOfPortfolio="2" />
            <PortfolioContentCard numOfPortfolio="3" />
            <PortfolioContentCard numOfPortfolio="4" />
            <PortfolioContentCard numOfPortfolio="5" />
            <PortfolioContentCard numOfPortfolio="6" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioContent;
