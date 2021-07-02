import React from "react";

function Input({
  label,
  name,
  onchange,
  value,
  placeholder,
  type = "text",
  error,
}) {
  // console.log(error)
  return (
    <React.Fragment>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onchange(e)}
      />
      <h6 className="text-danger">{error}</h6>
    </React.Fragment>
  );
}

export default Input;
