import React, { Component } from "react";
import DevmapProperty from "../DevmapProperty/DevmapProperty";
import DynamicField from "../DynamicField/DynamicField";
import "./DevmapComponent.css";

import { renameComponent } from '../actions';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  maps: state.maps
});
export default connect (mapStateToProps, { renameComponent }) (class DevmapComponent extends Component {

  updateTitle = newTitle => {
    // this.setState({ title: newTitle });
    this.props.renameComponent(this.props.mapId, this.props.title, newTitle);
  };

  validateTitle = title => {
    const targetMap = this.props.maps.filter(map => map.id === this.props.mapId)[0];
    const components = [];
    targetMap.modules.forEach(module => components.push(...module.components));
    return components.every(component => component.title !== title)
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
      this.props.properties.length > 0 ? (
        this.props.properties.map((prop, index) => (
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
      this.props.methods.length > 0 ? (
        this.props.methods.map((method, index) => (
          <DevmapProperty
            method
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
            value={this.props.title}
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
})