import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.warn("useEffect called");
  });
  return (
    <div className="App">
      <button>Update Counter</button>
    </div>
  );
}

export default App;
