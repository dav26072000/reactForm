import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent/ButtonComponent";
import InputComponent from "./Components/InputComponent/InputComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      notValidated: false,
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  formSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  formValidation(event) {
    if (event.target.name === "firstName" || event.target.name === "lastName") {
      event.target.name === "firstName"
        ? this.setState({ firstName: event.target.value })
        : this.setState({ lastName: event.target.value });
      const regName = /^[a-zA-Z]+$/;
      const name = event.target.value;
      if (!regName.test(name)) {
        event.target.classList.remove("border-green");
        event.target.classList.add("border-red");
        this.setState({ notValidated: true });
        return false;
      }
      event.target.classList.remove("border-red");
      event.target.classList.add("border-green");
      return true;
    }

    if (event.target.name === "email") {
      console.log("bob");
    }
    return false;
  }
  // handleChange(event) {
  //   console.log(this.target.value);
  //   console.log(event.target.value);
  //   // this.setState({
  //   //   firstName: event.target.value,
  //   //   lastName: "",
  //   //   email: "",
  //   //   password: "",
  //   //   confirmPassword: "",
  //   // });
  // }

  render() {
    const { firstName, lastName, email, password, confirmPassword } =
      this.state;

    return (
      <div className="App">
        <form onSubmit={this.formSubmit}>
          <InputComponent
            value={firstName}
            onChange={this.formValidation}
            placeholder="First name"
            type="text"
            name="firstName"
            required
          />
          <InputComponent
            value={lastName}
            onChange={this.formValidation}
            placeholder="Last name"
            type="text"
            name="lastName"
            required
          />
          <InputComponent
            value={email}
            onChange={this.formValidation}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <InputComponent
            value={password}
            onChange={this.formValidation}
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <InputComponent
            value={confirmPassword}
            onChange={this.formValidation}
            placeholder="Confirm password"
            type="password"
            name="confirmPassword"
            required
          />
          <ButtonComponent type="submit" buttonName="Submit" />
        </form>
      </div>
    );
  }
}
