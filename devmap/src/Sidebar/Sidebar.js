import React from 'react';
import './Sidebar.scss';

export default class Sidebar extends React.Component {
  render (){

    let maps = this.props.maps.map (map => {
      return (
        <div className='map-item'>
          <h2>{map.name}</h2>
          <p>by {map.author}</p>
        </div>
      );
    });

    return (
      <div className='sidebar'>
        <h1>My maps</h1>
        {maps}
      </div>
    );
  }
}