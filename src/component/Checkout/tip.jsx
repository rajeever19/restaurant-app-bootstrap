import React, { useState } from "react";

function Tip({ close,submittip }) {
  const [tip, setTip] = useState();
  const handlechange = (e) => {
    setTip(e.currentTarget.value);
  };

  return (
    <div className="tip_baba">
      <div className="tip-container">
        <div className="tip-header">
          <p>Tip</p> <i class="fa fa-times" aria-hidden="true" onClick={()=>close()}></i>{" "}
        </div>
        <div className="tipbtn">
          <div className="tip_value" onClick={() => setTip(10)}>
            10%
          </div>
          <div className="tip_value" onClick={() => setTip(15)}>
            15%
          </div>
          <div className="tip_value" onClick={() => setTip(20)}>
            20%
          </div>
          <div className="tip_value bgt" onClick={() => setTip(25)}>
            25%
          </div>
          <div className="tip_value" onClick={() => setTip(0)}>
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
          <button className="btnb" onClick={()=>submittip(tip)}>Submit</button>
          <button className="btnb" onClick={()=>close()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Tip;
