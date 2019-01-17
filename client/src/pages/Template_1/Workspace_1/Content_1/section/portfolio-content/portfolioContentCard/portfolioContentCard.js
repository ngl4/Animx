import React, { Component } from "react";

class PortfolioContentCard extends Component {
  render() {
    return (
      <div>
        <div className="row card-text">
          <div className="col-md-5 p-0 d-flex justify-content-end">
            <div className="card w-75 ml-5">
              <div className="card-body">
                <form>
                <h5 className="text-left mb-5"><u>Portfolio #{this.props.numOfPortfolio}</u></h5>
                <p>Project Image</p>

                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      name="myImage"
                      onChange={this.props.selectImages}
                      multiple
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose file
                    </label>
                  </div>
                  <button
                    className="btn btn-warning btn-sm mt-3"
                    type="submit"
                    onClick={this.props.uploadImage}
                  >
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <form className="mt-5">
              <div className="form-group">
                <label for="portfolioFormControlInput1" className="ml-0">
                  Title
                </label>
                <div className="d-flex justify-content-center">
                  <input
                    name="portfolio_title"
                    value={this.props.portfolio_title}
                    onChange={this.props.handleInputChange}
                    className="form-control w-75"
                    id="portfolioFormControlInput1"
                    placeholder="portfolio name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="portfolioFormControlTextarea1">Textarea</label>
                <div className="d-flex justify-content-center">
                  <textarea
                    name="portfolio_textarea"
                    className="form-control w-75"
                    id="portfolioFormControlTextarea1"
                    value={this.props.portfolio_textarea}
                    onChange={this.props.handleInputChange}
                    rows="5"
                  />
                </div>
                {this.props.isPortfolioSubmit ? (
                  <button
                    type="button"
                    data-section="portfolio"
                    className="btn btn-primary btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={
                      !(this.props.portfolio_title && this.props.portfolio_textarea)
                    }
                    onClick={this.props.handleFormEdit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    data-section="portfolio"
                    className="btn btn-warning btn-sm mr-2 ml-2 h-25 mt-5"
                    disabled={
                      !(this.props.portfolio_title && this.props.portfolio_textarea)
                    }
                    onClick={this.props.handleFormSubmit}
                  >
                    Submit
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-secondary btn-sm h-25 mt-5"
                  data-section="portfolio"
                  onClick={this.props.handleFormDelete}
                >
                  Delete All
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioContentCard;
