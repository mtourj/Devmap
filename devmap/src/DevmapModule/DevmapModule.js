import React, { Component } from "react";
import DevmapComponent from '../DevmapComponent/DevmapComponent';
import './DevmapModule.css';

export default class DevmapModule extends Component {
  state = {
    components: [{ title: "Component 1" }, { title: "Component 2" }]
  };

  deleteComponent = index => {
    const components = [...this.state.components];
    components.splice(index, 1);
    this.setState({ components: components });
  };

  render() {
    const components =
      this.state.components.length > 0 ? (
        this.state.components.map(component => (
          <DevmapComponent
            delete={this.deleteComponent}
            title={component.title}
            key={component.title}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This module has no components</p>
      );

    return <div className="module">{components}</div>;
  }
}
