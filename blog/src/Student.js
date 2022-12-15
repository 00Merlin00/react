import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h3>{this.props.email}</h3>
      </div>
    );
  }
}

export default Student;
