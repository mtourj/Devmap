import React, { Component } from "react";
import DevmapProperty from "../DevmapProperty/DevmapProperty";
import DevmapMethod from "../DevmapMethod/DevmapMethod";
import DynamicField from "../DynamicField/DynamicField";
import "./DevmapComponent.css";

export default class DevmapComponent extends Component {
  state = {
    title: this.props.title,
    properties: [
      { name: "property1", type: "string" },
      { name: "property2", type: "int" },
      { name: "property3", type: "{}" }
    ],
    methods: [
      { name: "method1", returns: "int" },
      { name: "method2", returns: "string" },
      { name: "method3", returns: "[]" }
    ]
  };

  updateTitle = newTitle => {
    this.setState({ title: newTitle });
  };

  validateTitle = title => {
    return this.props.getParentState().components.every (component => component.title !== title);
  }

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

  deleteMethod = index => {
    const methods = [...this.state.methods];
    methods.splice(index, 1);
    this.setState({ methods: methods });
  };

  render() {

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

    let methods =
      this.state.methods.length > 0 ? (
        this.state.methods.map((method, index) => (
          <DevmapMethod
            name={method.name}
            returns={method.returns}
            key={method.name}
            deleteMethod={() => this.deleteMethod(index)}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This component has no methods.</p>
      );

    return (
      <div className="component">
        <div className="title">
          <DynamicField
            updateValue={this.updateTitle}
            placeholder="TITLE"
            value={this.state.title}
            className="titleText"
            validate={this.validateTitle}
          />
          <button onClick={this.addItem} className="far add">
            +
          </button>
          <button
            onClick={this.deleteComponent}
            className="far fa-trash-alt delete"
          />
        </div>
        <div className="properties">{properties}</div>
        <div className="methods">{methods}</div>
      </div>
    );
  }
}
