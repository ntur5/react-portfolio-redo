
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
        pageTitle: "Welcome to my Portfolio",
        data:  [
            { title: "Quip", url: 'google.com' }, 
            { title: "Eventbrite", url: 'google.com' }, 
            { title: "Ministry Safe", url: 'google.com' }, 
            { title: "SwingAway", url: 'google.com' }
        ]
    }

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={item.url}/>;
    });
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something else"
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.portfolioItems()}
        <hr></hr>
        <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    );
  }
}