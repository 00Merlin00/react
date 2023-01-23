import React from "react";

import { useLocation, useParams } from "react-router-dom";
function User(prop) {
  //   const params = useParams();
  const location = useLocation();
  console.log(location.state, "location");
  console.log("id", params);
  return (
    <div>
      <h1>User Component</h1>
    </div>
  );
}

export default User;
