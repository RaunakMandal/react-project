import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome, Visitor",
            count: 0,
        };
    }

    changeMessage() {
        this.setState({
            message: "Thank You for subscribing",
        });
    }

    increaseCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decreaseCount = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
        return (
            <div>
                {this.props.newComponent(
                    this.state.count,
                    this.increaseCount,
                    this.decreaseCount
                )}
            </div>
        );
    }
}

export default Counter;
