import React from 'react';
import './DevmapProperty.css';

const DevmapProperty = props => {
  // Is this a method?
  const isMethod = props.method;

  const type = isMethod ? <p className='returns'>&rarr; {props.returns}</p>
                        : <p className='type'>{props.type}</p>;

  return (
    <div className='property'>
      <p>{props.name}</p>
      {type}
      <button onClick={isMethod ? props.deleteMethod : props.deleteProperty} className='delete'>X</button>
    </div>
  );
}

export default DevmapProperty;

