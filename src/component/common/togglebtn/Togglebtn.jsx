import React, { useState } from "react";
import "./togglebtn.css";
const Togglebtn = ({ lname = "", rname = "", onclick }) => {
  const [to, setto] = useState(true);
  const thetoggle = () => {
    onclick(to);
    // console.log(to)
    setto(!to);
  };
  return (
    <div id="toggle" onClick={() => thetoggle()}>
      <div className={to ? "indicator" : "indicator2"}></div>
      {to ? (
        <div className="left-item">{lname}</div>
      ) : (
        <div className="right-item">{rname}</div>
      )}
    </div>
  );
};

export default Togglebtn;
