import React, { Component } from "react";
import "./InputComponent.css";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      placeholder,
      name,
      className,
      type = "number",
      onChange,
      value,
    } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        onChange={onChange}
        value={value}
        required
      />
    );
  }
}
