import "./App.css";
import User from "./User";
import Members from "./Members";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: "Mohit" };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
