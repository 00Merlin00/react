import React, { useState } from "react";
import "./App.css";
import "./Style.css";

// import Table from "react-bootstrap/Table";

function App() {
  return (
    <div className="App">
      <h1>HOC</h1>
      <HOC cnt={Counter} />
    </div>
  );
}
function HOC(props) {
  return (
    <h3>
      <props.cnt />
    </h3>
  );
}

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default App;
