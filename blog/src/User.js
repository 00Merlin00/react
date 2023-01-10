import React, { forwardRef } from "react";

function User(props, ref) {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
}

export default forwardRef(User);
