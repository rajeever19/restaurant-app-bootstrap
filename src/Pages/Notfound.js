import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="container-fluid">
      Not Found
      <Link to="/">go to Home</Link>
    </div>
  );
}

export default Notfound;
