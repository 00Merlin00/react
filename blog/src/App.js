import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>Props in React :) </h1>
      <Student
        name="Mohit"
        email="mohit@test.com"
        other={{ state: "jaipur", pincode: "170092" }}
      />
      <Student
        name="jivan"
        email="jivan@test.com"
        other={{ state: "delhi", pincode: "110022" }}
      />
      <Student
        name="kriti"
        email="kitty@test.com"
        other={{ state: "pune", pincode: "330092" }}
      />
    </div>
  );
}

export default App;
