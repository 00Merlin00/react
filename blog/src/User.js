import React from "react";

function User(props) {
  let data = "kittu";
  return (
    <div>
      <h2>Username </h2>
      <button onClick={() => props.mohit(data)}>Click Me </button>
    </div>
  );
}

export default User;
