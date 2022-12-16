import "./App.css";
import Student from "./Student";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mohit",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Props</h1>
        <Student name={this.state.name} email="mohit@test.com"></Student>
        <button
          onClick={() => {
            this.setState({ name: "Marry" });
          }}
        >
          Update Info
        </button>
      </div>
    );
  }
}

export default App;
