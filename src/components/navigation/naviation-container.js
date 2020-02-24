import React, { Component } from 'react';

export default class NavigationContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {false ? <button>Add Blog</button> : null}
                <h1>Hello from Navigation</h1>
            </div>
        )
    }
}