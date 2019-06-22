import React, { Component } from "react";
import DevmapComponent from "../DevmapComponent/DevmapComponent";
import DynamicField from "../DynamicField/DynamicField";
import "./DevmapModule.css";

import { connect } from 'react-redux';

import { deleteComponent, renameModule } from '../actions';

const mapStateToProps = state => ({
  maps: state.maps,
  currentMap: state.currentMap
});

export default connect(mapStateToProps, { deleteComponent, renameModule }) (class DevmapModule extends Component {
  
  components = [];

  deleteComponent = name => {
    const components = [...this.components];
    const index = components.findIndex(component => component.title === name);
    components.splice(index, 1);
    this.props.deleteComponent(this.props.id, components);
  };

  updateTitle = newTitle => {
    this.props.renameModule(this.props.id, newTitle);
  };

  // This just makes sure there are no other modules with the same name
  validateTitle = title => {
    return true;
  }

  getState = () => {
    return this.state;
  }

  render() {
    const map = this.props.maps.find(map => map.id === this.props.currentMap);
    const module = map.modules.find(module => module.id === this.props.id);
    this.components = module.components;

    console.log('module rendered');
    const components =
      this.components.length > 0 ? (
        this.components.map(component => (
          <DevmapComponent
            mapId={this.props.mapId}
            moduleId={this.props.id}
            delete={this.deleteComponent}
            component={component}
            key={component.title}
            getParentProps={this.getState}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This module has no components</p>
      );

    console.log(components);

    return (
      <div className="module">
        <DynamicField
          centered
          updateValue={this.updateTitle}
          value={this.props.title}
          placeholder="TITLE"
          className="titleText"
          validate={this.validateTitle}
        />
        {components}
      </div>
    );
  }
})