import React from 'react';

const Field = props => {
  return (
    <div className='field'>
      <p className='field-label'>{props.label}</p>
      <input onChange={props.change} type={props.label} name={props.label} value={props.val} className='field-input' />
    </div>
  );
}

export default Field;