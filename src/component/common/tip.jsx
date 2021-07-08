import React, { useState } from "react";

function Tip({ close, submittip,total }) {
  const [tip, setTip] = useState(total*0.1);
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
            className={tip === total*0.1 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(total*0.1)}
          >
            10%
          </div>
          <div
            className={tip === total*0.15 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(total*0.15)}
          >
            15%
          </div>
          <div
            className={tip === total*0.2 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(total*0.2)}
          >
            20%
          </div>
          <div
            className={tip === total*0.25 ? "tip_value bgt" : "tip_value"}
            onClick={() => setTip(total*0.25)}
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
