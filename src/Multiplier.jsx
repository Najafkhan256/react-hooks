import React from "react";

const Multiplier = ({ handleClick }) => {
  console.log("multiplier render");
  return <button onClick={handleClick}>Multiplier</button>;
};

export default React.memo(Multiplier);
