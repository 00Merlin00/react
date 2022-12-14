import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>Props in React :) </h1>
      <Student name={"Mohit"} email={"mohit@test.com"} />
      <Student name={"jivan"} email={"jivan@test.com"} />
    </div>
  );
}

export default App;
