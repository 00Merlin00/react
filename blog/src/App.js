import "./App.css";
import User from "./User";
import React, { useState } from "react";

function App() {
  function getData() {
    alert("Hello from App");
  }
  let [loggedIn, setLoggedIn] = useState(null);
  return (
    <div className="App">
      <h1>Pass Functions as Props</h1>
      <User data={getData} />
    </div>
  );
}

export default App;
