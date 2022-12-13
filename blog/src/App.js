import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: "mohit" };
  }
  apple() {
    this.setState({ data: "rautela" });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data} </h1>
        <button
          onClick={() => {
            this.apple();
            s;
          }}
        >
          Update Data
        </button>
      </div>
    );
  }
}

export default App;
