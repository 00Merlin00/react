import "./App.css";
// import Student from "./Student";
import React, { useState } from "react";

function App() {
  let [name, setName] = useState(null);
  let [tnc, setTnc] = useState(false);
  let [interest, setInterest] = useState(null);
  function getFormData(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handle form in React</h1>
      <form onSubmit={getFormData}>
        <input type={"text"} placeholder="type name"></input> <br /> <br />
        <select>
          <option>Select Any</option>
          <option>DBZ</option>
          <option>Naruto</option>
        </select>{" "}
        <br /> <br />
        <input type={"checkbox"}></input> <span>Accept Term & Conditions</span>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
