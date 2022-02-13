import React, {Component} from 'react';

class Counter extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState( {counter:
        this.state.counter + 1});
    }
    componentDidMount() {
        this.setState({counter: 42});
    }
    componentDidUpdate() {
        alert("Number of clicks: " + this.state.counter);
    }
    render() {
        return (
        <div>
            <p>{this.state.counter}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
        );
    }
}

export default Counter;