import React, { useState } from "react";
import Register from '../component/Form/Register';
import Login from '../component/Form/Login';

const LoginForm = () => {
  const [changeform, setChagefrom] = useState(true);
  return (
    <div className="form_container">
      <div className="form_setup">
        {changeform ? <Login /> : <Register/>}
        <button className="btn-op" onClick={() => setChagefrom(!changeform)}>
          {" "}
          {changeform ? "I Don't have an Account" : "I have an Account"}
        </button>
        
      </div>
    </div>
  );
};

export default LoginForm;
