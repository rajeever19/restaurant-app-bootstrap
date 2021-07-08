import React from "react";
import "./Addbutton.css";

const AddButton=({ value = 1, onChange })=> {
  return (
    <div className="add-btn ">
      {value < 1 ? (
        <div className="add-btn1 btn btn-xs btn-outline-danger" onClick={() => onChange(value + 1)}>
          + Add
        </div>
      ) : (
        <div className="add-btn2 ">
          <div className="show-value">{value}</div>
          <div className="show-icon">
            <div className="icon-1 btn-outline-danger" onClick={() => onChange(+1)}>
              {">"}
            </div>
            <div className="icon-2 btn-outline-danger" onClick={() => onChange(-1)}>
              {"<"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AddButton;
