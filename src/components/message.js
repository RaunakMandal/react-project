import React, { Component } from "react";
class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hey, ",
            count: 0,
        };
    }

    changeMessage() {
        this.setState({
            message: "",
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
                <h3>
                    {this.state.message} Total count: {this.state.count}
                </h3>
                <button onClick={this.increaseCount.bind(this)}>+</button>
                <button onClick={this.decreaseCount}>-</button>
            </div>
        );
    }
}

export default Welcome;
