import React from 'react'

export default function(props) {
    console.log(props)
    return (
        <div>
            <h2>portfolioDetail for {props.match.params.slug}</h2>
        </div>
    )
}