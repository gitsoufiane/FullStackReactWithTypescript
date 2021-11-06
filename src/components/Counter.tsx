import React from "react";

type CounterState = {
  count: number;
};

export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {};
  decrement = () => {};

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
