import React from "react";

function User(props) {
  return (
    <div>
      <h2>Username : {props.name}</h2>
      <button>Click Me </button>
    </div>
  );
}

export default User;
