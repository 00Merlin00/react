import React from "react";
import { CommonContext } from "./CommonContext";

function Main() {
  return (
    <CommonContext.Consumer>
      {({ theme }) => <h1>hello page</h1>}
    </CommonContext.Consumer>
  );
}
export default Main;
