import React from "react";

const CalculatorButton = ({ value, action }) => {
  return <button onClick={action}>{value}</button>;
};

export default CalculatorButton;
