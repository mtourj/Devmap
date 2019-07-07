import React from 'react';
import './DevmapProperty.css';

import DynamicField from '../DynamicField/DynamicField';

const DevmapProperty = props => {
  // Is this a method?
  const isMethod = props.method;

  const type = isMethod ? <span className='returns'>{['→', props.returns].join(' ')}</span>
                        : <span className='type'>{props.type}</span>;

  const updateName = newName => {
    props.rename(props.index, newName);
  }

  const validateName = () => {
    return true;
  }

  return (
    <div className='property'>
      <DynamicField
            nospace
            updateValue={updateName}
            placeholder="Name"
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

