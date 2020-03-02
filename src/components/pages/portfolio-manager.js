import React, { Component } from 'react'
import axios from 'axios'

import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list'

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems:  []
        }
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
                <h1>Portfolio form...</h1>
                </div>
                <div className="right-column">
                    <PortfolioSideBarList data={this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}