import React, { useState } from "react";
import LoginForm from "./loginandregister/loginform";
import RegisterForm from "./loginandregister/registerform";
const FormofLogin = () => {
  const [changeform, setChagefrom] = useState(true);
  return (
    <div className="form_container">
      <div className="form_setup">
        {changeform ? <LoginForm /> : <RegisterForm />}
        <button className="btn-op" onClick={() => setChagefrom(!changeform)}>
          {" "}
          {changeform ? "I Don't have an Account" : "I have an Account"}
        </button>
      </div>
    </div>
  );
};

export default FormofLogin;
