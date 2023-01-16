import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// import Table from "react-bootstrap/Table";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="./home">Home Page</Link>
        <br />
        <Link to="./about">About Page</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Home Page of Website</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About Page of Website</p>
    </div>
  );
}
export default App;
