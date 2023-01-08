import React from "react";
import "./App.css";
import "./Style.css";

// import Table from "react-bootstrap/Table";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.warn("check re-rendering");
    return (
      <div className="App">
        <h1>Pure Component in React {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click
        </button>
      </div>
    );
  }
}

export default App;
