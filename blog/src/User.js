import "./App.css";
import React, { useEffect, useState } from "react";

function User(props) {
  useEffect(() => {
    alert("count. is " + props.count);
  }, [props.count]);

  return (
    <div className="App">
      <h1>Count Props : {props.count}</h1>
      <h1>data Props: {props.data}</h1>
    </div>
  );
}

export default User;
