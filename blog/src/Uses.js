import React, { useEffect, useRef } from "react";

function User(props) {
  let preVal = useRef();
  useEffect(() => {
    preVal.current = props.count;
  });
  let preProps = preVal.current;
  return (
    <div>
      <h1>Current Value : {props.count}</h1>
      <h1>evious Value : {preProps}</h1>
    </div>
  );
}

export default User;
