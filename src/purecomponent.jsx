import React from 'react';
class Pure extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <h1>Pure Component</h1>
                <p>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. PureComponent Is Primarily Used for Performance Optimization. We can use React.memo for transforming a component into pure component.</p>
                <p>when we want to use pure component we want to write the PureComponent instad of component</p>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Counter+</button>
            </div>
        )
    }
}
export default Pure