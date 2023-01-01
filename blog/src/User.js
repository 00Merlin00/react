import React, { useEffect } from "react";

function User(props) {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="App">
      {" "}
      <h1>User Component {props.countProps}</h1>
    </div>
  );
}

export default User;
