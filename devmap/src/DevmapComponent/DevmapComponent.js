import React, { Component } from "react";
import DevmapProperty from "../DevmapProperty/DevmapProperty";
import DevmapMethod from "../DevmapMethod/DevmapMethod";
import "./DevmapComponent.css";

export default class DevmapComponent extends Component {
  state = {
    isEditing: false,
    title: this.props.title,
    tempTitle: this.props.title,
    properties: [
      { name: "property1", type: "string" },
      { name: "property2", type: "int" },
      { name: "property3", type: "{}" }
    ]
  };

  toggleEditTitle = async (toggle = true) => {
    // Only do this if we are about to switch to !isEditing to isEditing
    if (!this.state.isEditing && toggle) {
      await this.setState({ tempTitle: this.state.title });
    }

    await this.setState({ isEditing: toggle });

    // Only focus on the input if the input exists
    if (this.state.isEditing) {
      this.titleInput.focus();
    }
  };

  updateTitle = event => {
    event.preventDefault();
    // Validate title input. If empty, just skip
    if (this.state.tempTitle !== "")
      this.setState({ title: this.state.tempTitle });
    this.toggleEditTitle(false);
  };

  updateTempTitle = event => {
    this.setState({ tempTitle: event.target.value });
  };

  deleteComponent = event => {
    event.preventDefault();
    event.stopPropagation();
    
    this.props.delete();
  };

  addItem = event => {
    event.preventDefault();
    event.stopPropagation();
    // TODO - This should create a small popup form allowing
    // the user to add a property/method with a name/type
    // type: property or method?
    // title: ?
    // property type/return: ?
  };

  deleteProperty = index => {
    const properties = [...this.state.properties];
    properties.splice(index, 1);
    this.setState({ properties: properties });
  };

  render() {
    let titleSection = this.state.isEditing ? (
      <form
        onSubmit={this.updateTitle}
        onClick={this.toggleEditTitle}
        className="title"
      >
        <input
          ref={input => {
            this.titleInput = input;
          }}
          className="titleText"
          placeholder="TITLE"
          onChange={this.updateTempTitle}
          value={this.state.tempTitle}
          onBlur={this.toggleEditTitle.bind(this, false)}
        />
        <button type="submit" className="submit">
          &#10003;
        </button>
      </form>
    ) : (
      <div onClick={this.toggleEditTitle} className="title notEditing">
        <h2 className="titleText">{this.state.title}</h2>
        <button onClick={this.addItem} className="far add">
          +
        </button>
        <button
          onClick={this.deleteComponent}
          className="far fa-trash-alt delete"
        />
      </div>
    );

    let properties =
      this.state.properties.length > 0 ? (
        this.state.properties.map((prop, index) => (
          <DevmapProperty
            name={prop.name}
            type={prop.type}
            deleteProperty={() => this.deleteProperty(index)}
            key={prop.name}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">
          This component has no properties
        </p>
      );

    return (
      <div className="component">
        {titleSection}

        <div className="properties">{properties}</div>
        <div className="methods">
          <DevmapMethod name="method1" returns="int" />
          <DevmapMethod name="method2" returns="string" />
          <DevmapMethod name="method3" returns="[{}]" />
        </div>
      </div>
    );
  }
}
