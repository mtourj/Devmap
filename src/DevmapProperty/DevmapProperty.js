import React from "react";
import "./DevmapProperty.css";

import DynamicField from "../DynamicField/DynamicField";

const DevmapProperty = props => {
  // Is this a method?
  const isMethod = props.method;

  const updateName = newName => {
    props.rename(props.index, newName);
  };

  const updateType = newType => {
    props.setType(props.index, newType);
  };

  const validateName = () => {
    return true;
  };

  const validateType = () => {
    return true;
  };

  //['→', props.type].join(' ')

  return (
    <div className="property">
      <DynamicField
        nospace
        updateValue={updateName}
        placeholder="Name"
        value={props.name}
        className="mini-field-text"
        validate={validateName}
      />
      {
        isMethod ? <span className='returns'>→</span> : null
      }
      <DynamicField
        nospace
        text
        right
        updateValue={updateType}
        placeholder="type"
        value={props.type}
        className="mini-field-text type"
        validate={validateType}
      />
      <button
        onClick={
          isMethod
            ? () => props.deleteMethod(props.index)
            : () => props.deleteProperty(props.index)
        }
        className="delete"
      >
        X
      </button>
    </div>
  );
};

export default DevmapProperty;
