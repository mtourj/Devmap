import React, { Component } from "react";
import "./DynamicField.css";

export default class DynamicField extends Component {
  state = {
    isEditing: false,
    value: this.props.value,
    tempValue: this.props.value,
    invalid: ""
  };

  toggleEditValue = async (toggle = true) => {
    if (this.state.invalid) await this.setState({ invalid: "" });
    // Only do this if we are about to switch to !isEditing to isEditing
    if (!this.state.isEditing && toggle) {
      await this.setState({ tempValue: this.state.value });
    }

    await this.setState({ isEditing: toggle });

    // Only focus on the input if the input exists
    if (this.state.isEditing) {
      try {
        this.valueInput.focus();
      } catch (err) {
        console.log("Misfire!");
      }
    }
  };

  updateTempValue = async event => {
    if (this.state.invalid) this.setState({ invalid: "" });
    await this.setState({ tempValue: event.target.value });
  };

  updateValue = async event => {
    event.persist();
    event.preventDefault();

    // Validate value input.
    // Checks if string is empty
    // Runs through an optional validation function,
    // passed in by a parent
    // if ((this.props.validate && this.props.validate(this.state.tempValue)) || (!this.props.validate && this.state.tempValue.trim() !== "")) {

    const text = /^[A-Za-z ]+$/;

    if (
      this.state.tempValue.trim() !== "" &&
      !(this.props.nospace && this.state.tempValue.includes(" ")) &&
      !(this.props.text && !text.test(this.state.tempValue))
    ) {
      if (this.props.validate && this.props.validate(this.state.tempValue)) {
        await this.setState({ value: this.state.tempValue.trim() });

        this.props.updateValue(this.state.value);
        this.toggleEditValue(false);
      } else {
        await this.setState({ invalid: "The text you entered is invalid" });
      }
    } else {
      await this.setState({ invalid: "The text you entered is invalid" });
    }
  };

  render() {
    let field = this.state.isEditing ? (
      <form
        onSubmit={this.updateValue}
        onClick={this.toggleEditValue}
        className="field"
      >
        <input
          ref={input => {
            this.valueInput = input;
          }}
          className={`${this.props.className} ${this.props.centered ? "centered" : ""} ${
            this.state.invalid ? "invalid" : ""
          }`}
          placeholder={this.props.placeholder}
          onChange={this.updateTempValue}
          value={this.state.tempValue}
          onBlur={this.toggleEditValue.bind(this, false)}
        />
        {this.state.invalid ? (
          <p className="invalid-input">{this.state.invalid}</p>
        ) : null}
        <div className="button">
          <button type="submit" className="submit">
            &#10003;
          </button>
        </div>
      </form>
    ) : (
      <div onClick={this.toggleEditValue} className="field notEditing">
        <h2 className={`${this.props.className} ${this.props.centered ? "centered" : ""}`}>
          {this.state.value}
        </h2>
      </div>
    );

    return field;
  }
}
