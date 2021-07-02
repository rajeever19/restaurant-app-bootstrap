import React, { Component } from "react";
// import "./dropdown.css";

class Dropdown extends Component {
  state = { value: this.props.selectedItem };
  handleChange = (event) => {
    const p = event.target.value;
    const cp = [...this.props.items];
    const c = cp.find((a) => a._id === p);
    this.setState({ value: p });
    this.props.onItemSelect(c);
  };
  render() {
    const { value } = this.state;
    const { items: options } = this.props;
    return (
      <form>
        <div className="form-group">
          <select
            name={value}
            id={value}
            onChange={this.handleChange}
            className="form-control"
          >
            <option key="jjdf" value="">
              Select Category
            </option>
            {options.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
  }
}

export default Dropdown;
