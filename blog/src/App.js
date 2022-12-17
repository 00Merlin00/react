import "./App.css";
// import Student from "./Student";
import React, { useState } from "react";

function App() {
  let [data, setData] = useState(null);
  let { print, setPrint } = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div className="App">
      <h1>Get Input box value !</h1>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData}></input>
      <button onClick={setPrint(true)}>click Update</button>
    </div>
  );
}

export default App;
