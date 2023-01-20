import React from "react";
import "./App.css";
import "./Style.css";
import { Link, Routes, Route } from "react-router-dom";
import User from "./User";

function App() {
  let users = [
    { id: 1, name: "anil", email: "anil@test.com" },
    { id: 2, name: "megha", email: "megha@test.com" },
    { id: 3, name: "jay", email: "jay@test.com" },
    { id: 4, name: "kris", email: "kris@test.com" },
    { id: 5, name: "mridul", email: "mridul@test.com" },
  ];
  return (
    <div className="App">
      <h1>React Dynamic Routing</h1>
      {users.map((item, k) => (
        <div key={k}>
          <Link to={`/user/${item.id}`} state={item}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
      <Routes></Routes>
    </div>
  );
}
export default App;
