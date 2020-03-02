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
    }

    handleSuccessfulFormSubmisstion(portfolioItem) {
        // TODO
        // update the portfolioItems state
        // add the portfolioItems to the list
    }

    handleFormSubmissionError(error) {
        console.log("handleSuccessfulFormSubmissionError", error)
    }

    getPortfolioItems() {
        axios.get('https://nathanstorrrs.devcamp.space/portfolio/portfolio_items', {withCredentials: true})
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
                    <PortfolioSideBarList data={this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}