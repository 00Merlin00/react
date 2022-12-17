import "./App.css";
// import Student from "./Student";
import React, { useState } from "react";

function App() {
  let [data, setData] = useState(null);
  let [print, setPrint] = useState(false);

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}
      <input type={"text"} onChange={getData}></input>
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        click to Update
      </button>
    </div>
  );
}

export default App;
