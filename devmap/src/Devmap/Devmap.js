import React, { Component } from "react";
import DevmapModule from "../DevmapModule/DevmapModule";
import bgImage from "../img/devmapLogoLarge.png";
import "./Devmap.css";

import Sidebar from "../Sidebar/Sidebar";

export default class Devmap extends Component {
  state = {
    modules: [
      { title: "View Module" },
      { title: "Control Module" },
      { title: "Data Module" }
    ]
  };

  deleteModule = index => {
    const modules = [...this.state.modules];
    modules.splice(index, 1);
    this.setState({ modules: modules });
  };

  getState = () => {
    return this.state;
  };

  render() {
    const modules =
      this.state.modules.length > 0 ? (
        this.state.modules.map(module => (
          <DevmapModule
            delete={this.deleteModule}
            title={module.title}
            key={module.title}
            getParentState={this.getState}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This map has no modules</p>
      );

    return (<div className="cols">
      <Sidebar maps={this.props.maps} />
      <div className="map">
        {modules}
        <img src={bgImage} className="bg-img" alt="" />
      </div>
    </div>);
  }
}
