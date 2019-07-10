import React, { Component } from "react";
import DevmapProperty from "../DevmapProperty/DevmapProperty";
import DynamicField from "../DynamicField/DynamicField";
import "./DevmapComponent.css";

import { renameComponent, deleteProperty, renameProperty } from '../actions';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentMap: state.currentMap,
  maps: state.maps
});
export default connect (mapStateToProps, { renameComponent, deleteProperty, renameProperty }) (class DevmapComponent extends Component {
  properties = [];
  methods = [];

  updateTitle = newTitle => {
    this.props.renameComponent(this.props.moduleId, this.props.component.title, newTitle);
  };

  validateTitle = title => {
    const components = [];
    const map = this.props.maps.find(map => map.id === this.props.currentMap);
    map.modules.forEach(module => components.push(...module.components));
    return components.every(component => this.props.component.title === title ? true : component.title !== title )
  }

  deleteComponent = event => {
    event.preventDefault();
    event.stopPropagation();

    this.props.delete(this.props.title);
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

  setPropertyType = (index, newType) => {
    const properties = [...this.properties];
    properties[index].type = newType;
    this.props.renameProperty(this.props.moduleId, this.props.component.title, {
      title: this.props.component.title,
      properties,
      methods: this.methods
    })
  }

  setMethodType = (index, newType) => {
    const methods = [...this.methods];
    methods[index].type = newType;
    this.props.renameProperty(this.props.moduleId, this.props.component.title, {
      title: this.props.component.title,
      properties: this.properties,
      methods: methods
    })
  }

  renameProperty = (index, newName) => {
    const properties = [...this.properties];
    properties[index].name = newName;
    this.props.renameProperty(this.props.moduleId, this.props.component.title, {
      title: this.props.component.title,
      properties,
      methods: this.methods
    })
  }

  deleteProperty = index => {
    const properties = [...this.properties];
    properties.splice(index, 1);
    this.props.deleteProperty(this.props.moduleId, this.props.component.title, {
      title: this.props.component.title,
      properties,
      methods: this.methods,
    });
  };

  renameMethod = (index, newName) => {
    const methods = [...this.methods];
    methods[index].name = newName;
    this.props.renameProperty(this.props.moduleId, this.props.component.title, {
      title: this.props.component.title,
      properties: this.properties,
      methods
    })
  }

  deleteMethod = index => {
    const methods = [...this.methods];
    methods.splice(index, 1);
    this.props.deleteProperty(this.props.moduleId, this.props.component.title, {
      title: this.props.component.title,
      properties: this.properties,
      methods
    });
  };

  render() {

    this.properties = this.props.component.properties;
    this.methods = this.props.component.methods;

    let properties =
      this.properties.length > 0 ? (
        this.properties.map((prop, index) => (
          <DevmapProperty
            index={index}
            name={prop.name}
            type={prop.type}
            rename={this.renameProperty}
            setType={this.setPropertyType}
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
      this.methods.length > 0 ? (
        this.methods.map((method, index) => (
          <DevmapProperty
            method
            index={index}
            name={method.name}
            type={method.type}
            rename={this.renameMethod}
            setType={this.setMethodType}
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
            nospace
            updateValue={this.updateTitle}
            placeholder="TITLE"
            value={this.props.component.title}
            className="fieldText"
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