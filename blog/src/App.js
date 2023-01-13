import React, { useState } from "react";
import "./App.css";
import "./Style.css";

// import Table from "react-bootstrap/Table";

function App() {
  let [val, setVal] = useState("");
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm}>
        <input type={"text"}></input> <br /> <br />
        <input type={"text"}></input> <br /> <br />
      </form>
      <button>Submit</button>
    </div>
  );
}

export default App;
