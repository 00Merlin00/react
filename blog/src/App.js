import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  shouldComponentUpdate() {
    console.warn("shouldComponentUpdate", this.state.counter);
    if (this.state.counter < 9) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Should component Update {this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Update Counter here
        </button>
      </div>
    );
  }
}

export default App;
