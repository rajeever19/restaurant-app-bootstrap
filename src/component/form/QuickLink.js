import React, { Component } from "react";
import Joi from "joi-browser";
import * as userService from "../../../services/userService";
// import auth from "../services/authService";
import Input from "../../common/Input";

class QuickCheckout extends Component {
  state = {
    data: { first_name: "", last_name: "", phone: "", email: "" },
    errors: {},
    msg: "",
  };

  schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    phone: Joi.number().required().min(10).label("Phone Number"),
    email: Joi.string().email().label("Email"),
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
      // console.log(item);
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
    console.log(data);
    this.setState({ data, errors });
  };

  doSubmit = async () => {
    try {
      console.log("fdjalsjf");
      const { data } = await userService.register(this.state.data);
      console.log(data);
      // auth.loginWithJwt(data[0]);
      this.props.history.push("/");
      // window.location="/"
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        let msgs = { ...ex.response };
        // let msg = msgs.msg;
        // this.setState({ msg });
        console.log(ex.response, msgs);
      }
      // console.log("submited", this.state.msg);
    }
  };
  render() {
    const { data, errors, msg } = this.state;
    return (
      <>
        <div className="header text-center">Sign up</div>
        <form onSubmit={this.handleSubmit}>
          {/* <div className="label1">
            <div>First Name</div>
            <div>Last Name</div>
          </div> */}
          <div className="single_line">
            <Input
              // label="First Name"
              name="first_name"
              value={data["first_name"]}
              type="text"
              placeholder="First Name "
              error={errors["first_name"]}
              onchange={this.handleChange}
            />
            <Input
              // label="Last Name"
              name="last_name"
              value={data["last_name"]}
              type="text"
              error={errors["last_name"]}
              placeholder="Last Name "
              onchange={this.handleChange}
            />
          </div>
          <Input
            // label={"Email"}
            name={"email"}
            onchange={this.handleChange}
            value={data["email"]}
            error={errors["email"]}
            placeholder={"Email Id"}
            type="text"
          />

          <Input
            // label={"Phone"}
            name={"phone"}
            onchange={this.handleChange}
            error={errors["phone"]}
            value={data["phone"]}
            placeholder={"Mobile Number"}
            type="text"
          />

          {msg ? <div className="msg">{msg}</div> : ""}
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default QuickCheckout;
