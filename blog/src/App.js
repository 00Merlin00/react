import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./User";

function App() {
  let [data, setData] = useState(10);
  let [count, setCount] = useState(100);

  return (
    <div className="App">
      <User count={count} data={data} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Counter
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update Data
      </button>
    </div>
  );
}

export default App;
