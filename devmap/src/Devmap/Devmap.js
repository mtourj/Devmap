import React, { Component } from "react";
import DevmapModule from "../DevmapModule/DevmapModule";
import bgImage from '../img/devmapLogoLarge.png';
import "./Devmap.css";

export default class Devmap extends Component {
  state = {
    modules: [
      { title: "Module 1" },
      { title: "Module 2" },
      { title: "Module 3" }
    ]
  };

  deleteModule = index => {
    const modules = [...this.state.modules];
    modules.splice(index, 1);
    this.setState({ modules: modules });
  };

  render() {
    const modules =
      this.state.modules.length > 0 ? (
        this.state.modules.map(module => (
          <DevmapModule
            delete={this.deleteModule}
            title={module.title}
            key={module.title}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This map has no modules</p>
      );

    return <div className="map">
      {modules}
      <img src={bgImage} className='bg-img' alt='' />
    </div>;
  }
}
