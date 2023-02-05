import React from "react";
import { CommonContext } from "./CommonContext";

function Main() {
  return (
    <CommonContext.Consumer>
      {({ theme z}) => <h1>Hllo this is main page.</h1>}
    </CommonContext.Consumer>
  );
}
export default Main;
