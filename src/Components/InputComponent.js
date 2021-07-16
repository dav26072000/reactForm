import React, { Component } from "react";

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, name, className } = this.props;
    return (
      <input
        type="number"
        placeholder={placeholder}
        name={name}
        className={className}
      />
    );
  }
}
