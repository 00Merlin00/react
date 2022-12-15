import "./App.css";
import Student from "./Student";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <Student name="Mohit" email="mohit@test.com">
        {" "}
      </Student>
    </div>
  );
}

export default App;
