import React from "react";

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      action: props.action,
    };
  }

  render() {
    const { value, action } = this.state;
    return <button onClick={action}>{value}</button>;
  }
}
export default CalculatorButton;
