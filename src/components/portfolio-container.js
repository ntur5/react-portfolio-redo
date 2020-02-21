
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
        pageTitle: "Welcom to my Portfolio",
        data:  [
            { title: "Quip", url: 'google.com' }, 
            { title: "Eventbrite" }, 
            { title: "Ministry Safe" }, 
            { title: "SwingAway" }
        ]
    }
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={item.url}/>;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}