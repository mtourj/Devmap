import React from "react";
import "./DevmapMethod.css";

const DevmapMethod = props => {
  return (
    <div className="method">
      <p>{props.name}</p>
      <p className="returns">&rarr; {props.returns}</p>
      <button className='delete'>X</button>
    </div>
  );
};

export default DevmapMethod;
