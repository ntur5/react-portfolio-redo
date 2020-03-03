import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems:  []
        }

        this.handleSuccessfulFormSubmisstion = this.handleSuccessfulFormSubmisstion.bind(this)
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(portfolioItem) {
        console.log("handleDeleteClick")
    }

    handleSuccessfulFormSubmisstion(portfolioItem) {
        // console.log("handle Submission", portfolioItem)
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("handleSuccessfulFormSubmissionError", error)
    }

    getPortfolioItems() {
        axios.get('https://nathanstorrrs.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc', {withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.log('error getting portfolio items', error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmisstion={this.handleSuccessfulFormSubmisstion}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>
                <div className="right-column">
                    <PortfolioSideBarList 
                        handleDeleteClick={this.handleDeleteClick}
                        data={this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}