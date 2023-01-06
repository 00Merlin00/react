import "./App.css";
import "./Style.css";
import React from "react";
import Table from "react-bootstrap/Table";

function App() {
  let users = [
    { name: "anil", email: "anil@test.com", contact: "111" },
    { name: "neha", email: "neha@test.com", contact: "138" },
    { name: "kapil", email: "kapil@test.com", contact: "211" },
    { name: "anjali", email: "anjali@test.com", contact: "222" },
  ];
  return (
    <div className="App">
      <h1>Reuse Component with list</h1>
    </div>
  );
}

export default App;
