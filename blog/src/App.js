import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div className="App">
      <h1>UseEffect in React</h1>
    </div>
  );
}

export default App;
