import "./App.css";
import React, { useState } from "react";
import Student from "./Student";

class App extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  render() {
    return (
      <div className="App">
        {this.state.show ? <Student /> : <h1>child component removed</h1>}

        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle Child Component here
        </button>
      </div>
    );
  }
}

export default App;
