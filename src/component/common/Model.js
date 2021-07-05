import React from "react";

const Model = ({}) => {
  console.log("model");

  return (
    <div class="show-modal ">
      <div class="modal-content">
        <div class="close-button">
          <i class="fa fa-times" aria-hidden="true" />
        </div>
        <h2>you need to be login</h2>
        <button >Submit</button><button>cancel</button>
      </div>
    </div>
  );
};

export default Model;
