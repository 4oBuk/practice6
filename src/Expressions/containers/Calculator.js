import React from "react";
import { connect } from "react-redux";
import expressionsActions from "../actions/expressions";
import CalButton from "../../CalculatorButton";

class Calculator extends React.Component {
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
    if (this.isExpressionValid(inputValue)) {
      let numbers = inputValue.split(" ");
      let result;
      const operator = numbers[1];
      const num1 = parseFloat(numbers[0]);
      const num2 = parseFloat(numbers[2]); //todo fine operator
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = undefined;
      }
      let message = result;
      if (result === undefined || result === Infinity) {
        result = 0;
      }
      let expression = `\n--------------\n ${numbers.join("")}=${message}`;
      this.setState({
        history: history + expression,
        inputValue: result.toString(),
        operatorAllowed: false,
      });
      return result;
    }
  };

  operatorClick = (event) => {
    const { inputValue } = this.state;
    if (this.isExpressionValid(inputValue)) {
      const result = this.calculate();
      this.setState({
        inputValue: `${result} ${event.target.textContent} `,
      });
    } else {
      let input = inputValue.split(" ");
      this.setState({
        inputValue: `${input[0]} ${event.target.textContent} `,
      });
    }
  };
  isExpressionValid(expession) {
    const regex = /\d+.?\d* [/*+-]{1} \d+.?\d*$/;
    return regex.test(expession);
  }
  render() {
    const history = this.state.history;
    const inputValue = this.state.inputValue;
    const list = this.props.list;
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
        <CalButton value="1" action={this.numberClick} />
        <CalButton value="2" action={this.numberClick} />
        <CalButton value="3" action={this.numberClick} />
        <br />
        <CalButton value="4" action={this.numberClick} />
        <CalButton value="5" action={this.numberClick} />
        <CalButton value="6" action={this.numberClick} />
        <br />
        <CalButton value="7" action={this.numberClick} />
        <CalButton value="8" action={this.numberClick} />
        <CalButton value="9" action={this.numberClick} />
        <br />
        <CalButton value="0" action={this.numberClick} />
        <button
        onClick={() =>
          expressionsActions.fetchExpressions({
            amount: 5,
          })(this.props.dispatch)
        }
      > Get from Api</button>
        {!expressionsActions.isLoading && (
          <div style={{
            display:"flex",
            flexDirection :"column"
          }}>
            {list.map(expression => (
              <div>
                {expression}
              </div>
            ))}
          </div> 
        )}
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  ...reduxState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(mapReduxStateToProps, mapDispatchToProps)(Calculator);
