import React, { useState } from "react";

class Student extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div className="App">
        <h1> Student Component</h1>
      </div>
    );
  }
}

export default Student;
