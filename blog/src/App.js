import "./App.css";
// import Student from "./Student";
import React, { useState } from "react";

function App() {
  let [name, setName] = useState(null);
  let [tnc, setTnc] = useState(false);
  let [interest, setInterest] = useState(null);
  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handle form in React</h1>
      <form onSubmit={getFormData}>
        <input
          type={"text"}
          placeholder="type name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>{" "}
        <br /> <br />
        <select
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        >
          <option>Select Any</option>
          <option>DBZ</option>
          <option>Naruto</option>
        </select>{" "}
        <br /> <br />
        <input
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
          type={"checkbox"}
        ></input>{" "}
        <span>Accept Term & Conditions</span>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
