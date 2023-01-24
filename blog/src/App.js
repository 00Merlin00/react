import React from "react";
import "./App.css";
import "./Style.css";

function App() {
  fetch("url");
  return (
    <div className="App">
      <h1>Post Api</h1>
      <input type={"text"} name="name"></input> <br /> <br />
      <input type={"text"} name="name"></input> <br /> <br />
      <input type={"text"} name="name"></input> <br /> <br />
      <button>Save New User</button>
    </div>
  );
}
export default App;
