import "./App.css";
import "./Style.css";
import React from "react";
import Table from "react-bootstrap/Table";

function App() {
  let users = [
    {
      name: "mohit",
      email: "mohit@test.com",
      address: [
        { Hn: "10 ", city: "Noida", country: "India" },
        { Hn: "109 ", city: "Gurgaon", country: "India" },
        { Hn: "202 ", city: "Vanarasi", country: "India" },
        { Hn: "80 ", city: "Kerala", country: "India" },
      ],
    },
    {
      name: "anil",
      email: "anil@test.com",
      address: [
        { Hn: "10 ", city: "Noida", country: "India" },
        { Hn: "109 ", city: "Gurgaon", country: "India" },
        { Hn: "202 ", city: "Vanarasi", country: "India" },
        { Hn: "80 ", city: "Kerala", country: "India" },
      ],
    },
    {
      name: "james",
      email: "james@test.com",
      address: [
        { Hn: "10 ", city: "Noida", country: "India" },
        { Hn: "109 ", city: "Gurgaon", country: "India" },
        { Hn: "202 ", city: "Vanarasi", country: "India" },
        { Hn: "80 ", city: "Kerala", country: "India" },
      ],
    },
    {
      name: "kriti",
      email: "kriti@test.com",
      address: [
        { Hn: "10 ", city: "Noida", country: "India" },
        { Hn: "109 ", city: "Gurgaon", country: "India" },
        { Hn: "202 ", city: "Vanarasi", country: "India" },
        { Hn: "80 ", city: "Kerala", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <Table variant="dark" striped>
        <tbody>
          <tr>
            <td>S.no.</td>
            <td>Name</td>
            <td>E-mail</td>
            <td>Address</td>
          </tr>
          {users.map((data, k) => (
            <tr key={k}>
              <td>{k + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table variant="dark" striped>
                  <tbody>
                    {data.address.map((item, l) => (
                      <tr key={l}>
                        <td>{item.Hn}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
