import React from "react";
import Field from "./Field";
import "./Form.scss";

import uniqid from 'uniqid';

const Form = props => {
  /**
   * SAMPLE DATA
   * [ {label: 'label',
   *    value: value,
   *    change: onchange cb function },
   *    {label: 'label',
   *    value: value,
   *    change: onchange cb function } ]
   */

  const fields = props.data.map(element => {
    return <Field label={element.label} change={element.change} key={uniqid()} />;
  });

  return (
    <form className="form" onSubmit={props.submit}>
      <div className="form-fields">
        {/* <Field label="Username" />
        <Field label="Password" /> */}
        {fields}
      </div>
      <button className="submit" type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
