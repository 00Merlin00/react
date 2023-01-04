import "./App.css";
import "./Style.css";
import Table from "react-bootstrap/Table";

function App() {
  let users = [
    { name: "mohit", email: "mohit@test.com", contact: 111 },
    { name: "anil", email: "anil@test.com", contact: 222 },
    { name: "james", email: "james@test.com", contact: 333 },
    { name: "kriti", email: "kriti@test.com", contact: 444 },
  ];
  return (
    <div className="App">
      <h1>List with Bootstrap Table</h1>
      <Table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>Contact</td>
          </tr>
          {users.map((data, k) => (
            <tr key={k}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
