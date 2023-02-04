import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import { CommonContext } from "./Components/CommonContext";
import Main from "./Components/Main";

function App() {
  let [color, setColor] = useState(null);
  function updateColor() {
    setColor({ color: "red" });
  }
  return (
    <div className="App">
      <CommonContext.Provider value={color}>
        <h1>Context Api</h1>
      </CommonContext.Provider>
      <Main />
    </div>
  );
}
export default App;
