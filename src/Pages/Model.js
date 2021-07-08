import React from "react";
import { useHistory } from 'react-router-dom';

const Model = () => {
  const history = useHistory();

  const gotoLogin = () => {
    history.push("/login");
  };
  const goback = () => {
    history.goBack();
  };

  return (
    <div class="show-modal ">
      <div class="modal-content">
        {/* <div class="close-button">
          <i class="fa fa-times" aria-hidden="true" />
        </div> */}
        <h2>you need to be login</h2>
        <button onClick={() => gotoLogin()}>Submit</button>
        <button onClick={() => goback()}>cancel</button>
      </div>
    </div>
  );
};

export default Model;
