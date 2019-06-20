import React, { Component } from "react";
import DevmapComponent from "../DevmapComponent/DevmapComponent";
import DynamicField from "../DynamicField/DynamicField";
import "./DevmapModule.css";

export default class DevmapModule extends Component {
  state = {
    title: this.props.title,
    components: [{ title: "Component 1" }, { title: "Component 2" }]
  };

  deleteComponent = index => {
    const components = [...this.state.components];
    components.splice(index, 1);
    this.setState({ components: components });
  };

  updateTitle = newTitle => {
    this.setState({ title: newTitle });
  };

  // This just makes sure there are no other modules with the same name
  validateTitle = title => {
    return this.props.getParentProps().modules.every (module => module.title !== title);
  }

  getState = () => {
    return this.state;
  }

  render() {
    const components =
      this.props.components.length > 0 ? (
        this.props.components.map(component => (
          <DevmapComponent
            mapId={this.props.mapId}
            methods={component.methods}
            properties={component.properties}
            delete={this.deleteComponent}
            title={component.title}
            key={component.title}
            getParentProps={this.getState}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This module has no components</p>
      );

    return (
      <div className="module">
        <DynamicField
          centered
          updateValue={this.updateTitle}
          value={this.state.title}
          placeholder="TITLE"
          className="titleText"
          validate={this.validateTitle}
        />
        {components}
      </div>
    );
  }
}
