import React from "react";
import "./App.css";
import "./Style.css";

import User from "./User";
// import Table from "react-bootstrap/Table";

function App() {
  let data = "Kittu Rawat";
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User name={data} />
    </div>
  );
}

export default App;
