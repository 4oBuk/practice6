import CalButton from "./CalculatorButton";
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "test"
    }
  };

  onButtonClick = (event) => {
    let test = this.state.inputValue + event.target.textContent;
    this.setState({
      inputValue : test
    })
  }
  // TODO
  // 1. check if the expession is valid
  // 1.1. parse buffer
  // 2. if valid calculate expression
  // 2.1. parse buffer and calculate
  // 3. clean buffer and write operation in history
  // TODO
  // 1. operator '-' can be on the beggining of the buffer
  // 2. if expression is valid and a user press any operator
  //  calculate value, clean bugger, add result and operator to the buffer
  // 3. if expression isn't valid and previous element is operator
  //    replace operator with new one
  //
  // };
  render() {
    const inputValue = this.state.inputValue;
    return (
      <>
        <input readOnly={true} value={inputValue} type="text" />
        <CalButton value="=" action={this.onButtonClick} />
        <br />
        <CalButton value="+" action={this.onButtonClick} />
        <CalButton value="-" action={this.onButtonClick} />
        <CalButton value="/" action={this.onButtonClick} />
        <CalButton value="*" action={this.onButtonClick} />
        <br />
        <CalButton value="0" action={this.onButtonClick} />
        <CalButton value="1" action={this.onButtonClick} />
        <CalButton value="2" action={this.onButtonClick} />
        <br />
        <CalButton value="3" action={this.onButtonClick} />
        <CalButton value="4" action={this.onButtonClick} />
        <CalButton value="5" action={this.onButtonClick} />
        <br />
        <CalButton value="6" action={this.onButtonClick} />
        <CalButton value="7" action={this.onButtonClick} />
        <CalButton value="8" action={this.onButtonClick} />
        <br />
        <CalButton value="0" action={this.onButtonClick} />
      </>
    );
  }
}

function calculate(expression) {
  // example expression d+d
  // how to parse ('-'oneOrZeroNumberOperatorNumber)
  // parse two numbers and operator
  // I can use switch to calculate value (if "+" sum)
  // put expression in history and put result in input
}

function isExpressionValid(expession) {
  // use regex to check it
  // example 1: "7*1" -- valid
  // example 2: "4*-5" -- not valid 
}

export default App;
