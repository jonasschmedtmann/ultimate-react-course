import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    // state object n the current component
    // has only one huge state object and not individual state variables
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    // manually binding this keyword to handleDecrement function
  }
  handleDecrement() {
    console.log(this);
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });

    // this.setState({count:count-1}) both works
  }
  handleIncrement() {
    console.log(this);
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });

    // this.setState({count:count-1}) both works
  }
  render() {
    const date = new Date("jan 21 2001");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
