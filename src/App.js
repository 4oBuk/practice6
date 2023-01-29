import CalButton from "./CalculatorButton";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      currentResult: 0,
      history: "history:",
    };
  }

  numberClick = (event) => {
    let test = this.state.inputValue + event.target.textContent;
    this.setState({
      inputValue: test,
      operatorAllowed: true,
    });
  };

  calculate = (event) => {
    const inputValue = this.state.inputValue;
    let history = this.state.history;
    // calcuate value
    let result = 0;
    let expression = `\n--------------\n ${inputValue}=${result}`;
    this.setState({
      history: history + expression,
      inputValue: result,
      operatorAllowed: false,
    });
  };

  operatorClick = (event) => {
    console.log("operator clicked");
    const { inputValue } = this.state;
    if (this.isExpressionValid(inputValue)) {
      this.calculate();
      const { inputAfterUpdate } = this.state;
      this.setState({
        inputValue: `${inputAfterUpdate}${event.target.textContent}`,
      });
      // get state of input again
      // add operator to the end
    } else {
      if (inputValue === "") {
        return;
      }
      const regex = new RegExp("[123456890]+");
      if (regex.test(inputValue)) {
        this.setState({
          inputValue: `${inputValue}${event.target.textContent}`,
        });
      }
      // check if there is number before
      // add operator to the end
    }
  };
  isExpressionValid(expession) {
    const regex = /\d+[/*+-]{1}\d+$/;
    return regex.test(expession);
    // use regex to check it
    // example 1: "7*1" -- valid
    // example 2: "4*-5" -- not valid
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

  // !I have to check what to input on button click
  // ? I can create another component or a function for numbers
  // ? for example I will check is operator may be used for operation on click function
  //    If I will allow to use negative nubmers I need a delete button or just only positive
  // ? for numbers I will parse number and put it in state as current value
  //

  render() {
    const history = this.state.history;
    const inputValue = this.state.inputValue;
    return (
      <>
        <div>
          <textarea value={history} readOnly={true} />
          <br />
          <input readOnly={true} value={inputValue} type="text" />
          <CalButton value="=" action={this.calculate} />
        </div>
        <div>
          <CalButton value="+" action={this.operatorClick} />
          <CalButton value="-" action={this.operatorClick} />
          <CalButton value="/" action={this.operatorClick} />
          <CalButton value="*" action={this.operatorClick} />
        </div>
        <CalButton value="0" action={this.numberClick} />
        <CalButton value="1" action={this.numberClick} />
        <CalButton value="2" action={this.numberClick} />
        <br />
        <CalButton value="3" action={this.numberClick} />
        <CalButton value="4" action={this.numberClick} />
        <CalButton value="5" action={this.numberClick} />
        <br />
        <CalButton value="6" action={this.numberClick} />
        <CalButton value="7" action={this.numberClick} />
        <CalButton value="8" action={this.numberClick} />
        <br />
        <CalButton value="0" action={this.numberClick} />
      </>
    );
  }
}

export default App;
