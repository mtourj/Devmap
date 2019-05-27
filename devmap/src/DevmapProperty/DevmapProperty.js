import React from 'react';
import './DevmapProperty.css';

const DevmapProperty = props => {
  return (
    <div className="property">
      <p>{props.name}</p>
      <p className="type">{props.type}</p>
      <button onClick={props.deleteProperty} className='delete'>X</button>
    </div>
  );
}

export default DevmapProperty;

