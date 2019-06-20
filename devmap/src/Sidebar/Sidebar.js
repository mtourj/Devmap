import React from "react";
import "./Sidebar.scss";

const Sidebar = props => {
  let maps = props.maps.map(map => {
    return (
      <div
        onClick={e => props.setCurrentMap(map.id)}
        key={map.id}
        className="map-item"
      >
        <h2>{map.name}</h2>
        <p>by {map.author}</p>
      </div>
    );
  });

  return (
    <div className="sidebar">
      <h1>My maps</h1>
      {maps}
    </div>
  );
};

export default Sidebar;