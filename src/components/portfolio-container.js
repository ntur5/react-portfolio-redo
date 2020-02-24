
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
        pageTitle: "Welcome to my Portfolio",
        data:  [
            { title: "Quip", category: "eCommerse" }, 
            { title: "Eventbrite", category: "Scheduling" }, 
            { title: "Ministry Safe", category: "Enterprise" }, 
            { title: "SwingAway", category: "eCommerse" }
        ]
    }

    this.handleFilter = this.handleFilter.bind(this)

  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter
      })
    })
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
        <button onClick={() => this.handleFilter('eCommerse')}>eCommerse</button>
        <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
        {this.portfolioItems()}
      </div>
    );
  }
}