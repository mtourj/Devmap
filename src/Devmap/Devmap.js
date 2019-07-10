import React, { Component } from "react";
import DevmapModule from "../DevmapModule/DevmapModule";
import bgImage from "../img/devmapLogoLarge.png";
import "./Devmap.css";

import Sidebar from "../Sidebar/Sidebar";

import { connect } from 'react-redux';

import { setCurrentMap } from '../actions';

const mapStateToProps = state => {
  return ({
  maps: state.maps,
  currentMap: state.currentMap
});
}

export default connect(mapStateToProps, { setCurrentMap })(class Devmap extends Component {
  deleteModule = index => {
    const modules = [...this.props.modules];
    modules.splice(index, 1);
    // TODO: DELETE THE MODULE FROM DATA
  };

  addModule = () => {
    const newModuleIndex = this.props.modules.length + 1;


    //this.props.addModule();
  }

  getProps = () => {
    return this.props;
  };

  getCurrentMap = () => {
    return this.props.maps.find(map => map.id === this.props.currentMap)
  }

  setCurrentMap = id => {
    this.props.setCurrentMap(id);
  }

  render() {
    const modules =
      this.getCurrentMap() &&
      this.getCurrentMap().modules.length > 0 ? (
        this.getCurrentMap().modules.map(module => (
          <DevmapModule
            mapId={this.props.currentMap}
            id={module.id}
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
      {
        this.props.currentMap ? <div onClick={this.addModule} className='add-module-button'>+</div> : null
      }
      <div className="map">
        {
          this.props.currentMap ? modules : <p className='noselection'>Devmaps will appear here when selected</p>
        }
        <img src={bgImage} className="bg-img" alt="" />
      </div>
    </div>);
  }
})