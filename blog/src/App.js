import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      name: "Mohit",
    };
  }

  componentDidUpdate() {
    console.warn("CDU");
  }
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "kittu" });
          }}
        >
          Click to Change
        </button>
      </div>
    );
  }
}

export default App;
