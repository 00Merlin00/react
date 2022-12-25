import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Should component Update {this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
