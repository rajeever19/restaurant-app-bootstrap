import React from "react";

class AddressForm extends React.Component {
state={
data:{name:""}
} 


  render() {
    return (
      <div>
        <h1>Add New Address</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="autocomplete"
            className="input-field"
            ref="input"
            type="text"
          />
          <input
            name={"name"}
            value={name}
            placeholder={"Name"}
            onChange={this.handleChange}
          />
          <input
            name={"street_address"}
            value={this.state.street_address}
            placeholder={"Street Address"}
            onChange={this.handleChange}
          />
          <input
            name={"city"}
            value={this.state.city}
            placeholder={"City"}
            onChange={this.handleChange}
          />
          <input
            name={"state"}
            value={this.state.state}
            placeholder={"State"}
            onChange={this.handleChange}
          />
          <input
            name={"zip_code"}
            value={this.state.zip_code}
            placeholder={"Zipcode"}
            onChange={this.handleChange}
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddressForm;
