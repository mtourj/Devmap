import React, { useState } from 'react';
import './DevmapProperty.css';

import DynamicField from '../DynamicField/DynamicField';

const DevmapProperty = props => {
  // Is this a method?
  const isMethod = props.method;

  const type = isMethod ? <p className='returns'>&rarr; {props.returns}</p>
                        : <p className='type'>{props.type}</p>;

  const updateName = newName => {
    props.rename(props.name, newName);
  }

  const validateName = () => {
    return true;
  }

  return (
    <div className='property'>
      <DynamicField
            nospace
            text
            updateValue={updateName}
            placeholder="TITLE"
            value={props.name}
            className="mini-field-text"
            validate={validateName}
          />
      {type}
      <button onClick={isMethod ? () => props.deleteMethod(props.index) : () => props.deleteProperty(props.index)} className='delete'>X</button>
    </div>
  );
}

export default DevmapProperty;

