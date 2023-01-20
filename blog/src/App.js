import React, { useState } from "react";
import "./App.css";
import "./Style.css";

function App() {
  let users = [
    { id: 1, name: "anil", email: "anil@test.com" },
    { id: 2, name: "megha", email: "megha@test.com" },
    { id: 3, name: "jay", email: "jay@test.com" },
    { id: 4, name: "kris", email: "kris@test.com" },
  ];
  return (
    <div className="App">
      <h1>React Dynamic Routing</h1>
      {users.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
export default App;
