import "./App.css";
import Profile from "./Profile";
import React, { useState } from "react";

function App() {
  let [loggedIn, setLoggedIn] = useState(null);
  return (
    <div className="App">
      {loggedIn == 1 ? (
        <h1>HELLO USER 1</h1>
      ) : loggedIn == 2 ? (
        <h1>HELLO USER 2</h1>
      ) : (
        <h1>HELLO USER 3</h1>
      )}
      <Profile> </Profile>
    </div>
  );
}

export default App;
