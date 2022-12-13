import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>Props in React :) </h1>
      <Student name={"Mohit"} />
      <Student name={"jivan"} />
    </div>
  );
}

export default App;
