import React, { Component } from "react";
import DevmapModule from "../DevmapModule/DevmapModule";
import bgImage from "../img/devmapLogoLarge.png";
import "./Devmap.css";

import Sidebar from "../Sidebar/Sidebar";

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  modules: state.modules
});

export default connect(mapStateToProps, { })(class Devmap extends Component {
  state = {
    currentMap: null
  }

  deleteModule = index => {
    const modules = [...this.props.modules];
    modules.splice(index, 1);
    // TODO: DELETE THE MODULE FROM DATA
  };

  getProps = () => {
    return this.props;
  };

  setCurrentMap = id => {
    const targetMap = this.props.maps.filter(map => map.id === id);
    this.setState({ currentMap: targetMap[0]});
  }

  render() {
    console.log(this.props)

    const modules =
      this.state.currentMap &&
      this.state.currentMap.modules.length > 0 ? (
        this.state.currentMap.modules.map(module => (
          <DevmapModule
            mapId={this.state.currentMap.id}
            components={module.components}
            delete={this.deleteModule}
            title={module.title}
            key={module.title}
            getParentProps={this.getProps}
          />
        ))
      ) : (
        <p className="emptyContainerWarning">This map has no modules</p>
      );

    return (<div className="cols">
      <Sidebar maps={this.props.maps} setCurrentMap={this.setCurrentMap} />
      <div className="map">
        {
          this.state.currentMap ? modules : <p className='noselection'>Devmaps will appear here when selected</p>
        }
        <img src={bgImage} className="bg-img" alt="" />
      </div>
    </div>);
  }
})