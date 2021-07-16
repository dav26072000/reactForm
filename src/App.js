import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import InputComponent from "./Components/InputComponent";

export default class App extends Component {
  constructor(props) {
    super(props);

    let count;
    let storageMin;
    let storageMax;
    let storageStep;

    if (localStorage.getItem("counter")) {
      count = Number(localStorage.getItem("counter"));
    } else {
      count = 0;
    }
    if (
      localStorage.getItem("min") &&
      localStorage.getItem("max") &&
      localStorage.getItem("step")
    ) {
      storageMin = Number(localStorage.getItem("min"));
      storageMax = Number(localStorage.getItem("max"));
      storageStep = Number(localStorage.getItem("step"));
    } else {
      storageMin = 0;
      storageMax = 10;
      storageStep = 1;
    }

    this.state = {
      counter: count,
      min: storageMin,
      max: storageMax,
      step: storageStep,
      error: "",
    };
  }

  handleInc = () => {
    const { step, max, counter } = this.state;

    if (max - counter >= step) {
      this.setState((prevState) => {
        localStorage.setItem("counter", prevState.counter + Number(step));
        return { counter: prevState.counter + Number(step) };
      });
    } else {
      this.setState(() => {
        localStorage.setItem("counter", max);
        return { counter: max };
      });
    }
  };

  handleDec = () => {
    const { step, min, counter } = this.state;

    if (counter - min >= step) {
      this.setState((prevState) => {
        localStorage.setItem("counter", prevState.counter - Number(step));
        return { counter: prevState.counter - Number(step) };
      });
    } else {
      this.setState(() => {
        localStorage.setItem("counter", min);
        return { counter: min };
      });
    }
  };

  handleReset = () => {
    const { min } = this.state;

    this.setState(() => ({
      counter: Number(min),
    }));
    localStorage.setItem("counter", min);
  };

  handleSetChanges = (e) => {
    e.preventDefault();

    const getMaxCount = e.target.children.maxCount.value;
    const getMinCount = e.target.children.minCount.value;
    const getStep = e.target.children.step.value;

    if (getMaxCount !== "" && getMinCount !== "" && getStep !== "") {
      if (
        getMaxCount - getMinCount >= 0 &&
        getMaxCount - getMinCount > getStep
      ) {
        this.setState(() => {
          localStorage.setItem("min", getMinCount);
          localStorage.setItem("max", getMaxCount);
          localStorage.setItem("step", getStep);
          return {
            min: getMinCount,
            max: getMaxCount,
            counter: Number(getMinCount),
            step: getStep,
            error: "",
          };
        });
      } else {
        this.setState(() => ({
          error: "Maximum count must be greater than minimum count",
        }));
      }
    } else {
      this.setState(() => ({
        error: "One of inputs is empty",
      }));
    }
  };

  render() {
    const { counter, min, max, step, error } = this.state;
    const minimumDisabled = counter <= min;
    const maximumDisabled = counter >= max;
    return (
      <div className="App">
        <div className="App_inc-dec">
          <ButtonComponent
            dis={minimumDisabled}
            buttonName="Decrease"
            clickEvent={this.handleDec}
            className="button-style-black"
          />
          <span>{counter}</span>
          <ButtonComponent
            dis={maximumDisabled}
            buttonName="Increase"
            clickEvent={this.handleInc}
            className="button-style-black"
          />
        </div>
        <div className="App_reset">
          <ButtonComponent
            dis={counter === 0}
            buttonName="Reset"
            clickEvent={this.handleReset}
            className="button-style-black"
          />
        </div>
        <div className="App_inputs">
          <form action="#" onSubmit={this.handleSetChanges}>
            <InputComponent
              name="minCount"
              placeholder={`Min value ${min}`}
              className="input-style-green"
            />
            <InputComponent
              name="maxCount"
              placeholder={`Max value ${max}`}
              className="input-style-green"
            />
            <InputComponent
              name="step"
              placeholder={`Step value ${step}`}
              className="input-style-green"
            />

            <ButtonComponent
              buttonName="Set changes"
              type="submit"
              className="button-style-black"
            />
          </form>
        </div>
        <div className="App-error">
          <h3>{error}</h3>
        </div>
      </div>
    );
  }
}
