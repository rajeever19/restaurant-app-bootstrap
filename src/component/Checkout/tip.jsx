import React, { useState } from "react";

function Tip({ close, submittip }) {
  const [tip, setTip] = useState();
  const handlechange = (e) => {
    setTip(e.currentTarget.value);
  };

  return (
    <div className="tip_baba">
      <div className="tip-container">
        <div className="tip-header">
          <p>Tip</p>{" "}
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => close()}
          ></i>{" "}
        </div>
        <div className="tipbtn">
          <div
            className={tip === 10 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(10)}
          >
            10%
          </div>
          <div
            className={tip === 15 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(15)}
          >
            15%
          </div>
          <div
            className={tip === 20 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(20)}
          >
            20%
          </div>
          <div
            className={tip === 25 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(25)}
          >
            25%
          </div>
          <div
            className={tip === 0 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(0)}
          >
            no tip
          </div>
          <div className="tip_value">
            <input
              type="number"
              onChange={(e) => handlechange(e)}
              value={tip}
            />
          </div>
        </div>
        <div className="tip_bottom">
          <button className="btnb" onClick={() => submittip(tip > 0 ? tip : 0)}>
            Submit
          </button>
          <button className="btnb" onClick={() => close()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tip;
