import React, { Component } from "react";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      buttonName,
      clickEvent,
      dis,
      onSubmit,
      className,
      type = "button",
    } = this.props;
    return (
      <button
        type={type}
        onClick={clickEvent}
        disabled={dis}
        onSubmit={onSubmit}
        className={className}
      >
        {buttonName}
      </button>
    );
  }
}
export default ButtonComponent;
