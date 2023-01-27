import React, { useEffect, useState } from "react";
import "./App.css";
import "./Style.css";

function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  function saveUser() {
    console.warn(name, email, mobile);
  }
  return (
    <div className="App">
      <h1>Post Api</h1>
      <input
        type={"text"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      ></input>
      <br /> <br />
      <input
        type={"text"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      ></input>
      <br /> <br />
      <input
        type={"text"}
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="mobile"
      ></input>
      <br />
      <button onClick={saveUser}>Save New User</button>
    </div>
  );
}
export default App;
