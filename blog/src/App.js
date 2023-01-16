import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";

// import Table from "react-bootstrap/Table";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
