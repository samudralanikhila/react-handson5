import React from "react";
// import { useState } from "react";
class High extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <h1>Higher order component</h1>
                <p>A higher-order component (HOC) is an advanced technique in React for reusing component logic.
                    HOCs are not part of the React API,They are a pattern that emerges from React's compositional nature.
                    a higher-order component is a function that takes a component and returns a new component.
                </p>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Counter+</button>
            </div>
        )
    }
}
export default High