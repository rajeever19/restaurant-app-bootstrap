import React, { Component } from "react";
import Joi from "joi-browser";
import auth from "../../../services/authService";
import Input from "../../common/Input";

class LoginForm extends Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
    msg: "",
    loading: false,
  };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().min(8).label("Password"),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);
    if (!result.error) return;
    const errors = {};
    for (let item of result.error.details) {
      // console.log(item);+
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else {
      delete errors[input.name];
    }
    const data = { ...this.state.data };
    data[input.name] = input.value;
    console.log(errorMessage, data, errors);
    this.setState({ data, errors });
  };

  doSubmit = async () => {
    const { data } = this.state;
    this.setState({ loading: true });
    try {
      await auth.login(data.username, data.password);
      window.location = "/";
    } catch (ex) {
      console.log(ex.response);
      if (ex.response && ex.response.status >= 400) {
        const p = { ...ex.response.data };

        this.setState({ msg: p.detail });
      }
    }
    this.setState({ loading: false });
  };
  tochangelocation = () => {
    this.props.history.push("/register");
  };
  render() {
    const { data, errors, msg,loading } = this.state;
    return (
      <>
        <div className="header">Login</div>
        <form onSubmit={this.handleSubmit}>
          <Input
            // label="Username"
            name="username"
            value={data["username"]}
            type="text"
            placeholder="Enter the Username"
            error={errors["username"]}
            onchange={this.handleChange}
          />
          <Input
            // label="Password"
            name="password"
            value={data["password"]}
            type="password"
            error={errors["password"]}
            placeholder="Password"
            onchange={this.handleChange}
          />
          {msg ? (
            <div className="alert alert-danger">
              <p>{msg}</p>
            </div>
          ) : (
            ""
          )}

          <button type="submit" className="btn_submit">
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
