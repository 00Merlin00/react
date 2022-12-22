import "./App.css";
import User from "./User";
import Members from "./Members";
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
