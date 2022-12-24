import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(preProp, preState, snapshot) {
    console.warn("CDU", preState);
  }
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Click to Change
        </button>
      </div>
    );
  }
}

export default App;
