import React, { Component } from "react";
import "./DynamicField.css";

export default class DynamicField extends Component {
  state = {
    isEditing: false,
    value: this.props.value,
    tempValue: this.props.value
  };

  toggleEditValue = async (toggle = true) => {
    // Only do this if we are about to switch to !isEditing to isEditing
    if (!this.state.isEditing && toggle) {
      await this.setState({ tempValue: this.state.value });
    }

    await this.setState({ isEditing: toggle });

    // Only focus on the input if the input exists
    if (this.state.isEditing) {
      this.valueInput.focus();
    }
  };

  updateTempValue = async event => {
    await this.setState({ tempValue: event.target.value });
  };

  updateValue = async event => {
    event.preventDefault();

    // Validate value input.
    // Checks if string is empty
    // Runs through an optional validation function,
    // passed in by a parent
    // if ((this.props.validate && this.props.validate(this.state.tempValue)) || (!this.props.validate && this.state.tempValue.trim() !== "")) {
    if (this.state.tempValue.trim() !== "") {
      if (this.props.validate && this.props.validate(this.state.tempValue)) {
        console.log("valid title!");
        await this.setState({ value: this.state.tempValue.trim() });
      }
    }

    //TODO: Handle invalid strings by giving an error like 'There is already a module with that name!'
    this.props.updateValue(this.state.value);
    this.toggleEditValue(false);
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
          className={`fieldText ${this.props.centered ? 'centered' : ''}`}
          placeholder={this.props.placeholder}
          onChange={this.updateTempValue}
          value={this.state.tempValue}
          onBlur={this.toggleEditValue.bind(this, false)}
        />
        <div className="button">
          <button type="submit" className="submit">
            &#10003;
          </button>
        </div>
      </form>
    ) : (
      <div onClick={this.toggleEditValue} className="field notEditing">
        <h2 className={`fieldText ${this.props.centered ? 'centered' : ''}`}>{this.state.value}</h2>
      </div>
    );

    return field;
  }
}
