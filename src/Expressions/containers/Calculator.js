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
  componentDidUpdate(prevProps) {
    if(!this.props.isCalculated && prevProps.isCalculated !== this.props.isCalculated) {
      this.onGetFromApiClick();
    }
  }
  numberClick = (event) => {
    let test = this.state.inputValue + event.target.textContent;
    this.setState({
      inputValue: test,
      operatorAllowed: true,
    });
  };
  expressionToString(expression, result) {
    return `\n----------------\n ${expression} = ${result}`;
  }
  onCalculateClick = (event) => {
    const inputValue = this.state.inputValue;
    let history = this.state.history;
    let result = this.calculate(inputValue);
    let message = result;
    if (result === undefined || result === Infinity) {
      result = 0;
    }
    let expression = `\n----------------\n ${inputValue} = ${message}`;
    this.setState({
      history: history + expression,
      inputValue: result.toString(),
      operatorAllowed: false,
    });
  };
  onGetFromApiClick = () => {
    const { isCalculated, list } = this.props;
    const {history} = this.state;
    let resultFromApi = "";
    if (!isCalculated) {
      resultFromApi += `\nreceived ${list.length}`;
      list.forEach((expression) => {
        let result = this.calculate(expression);
        resultFromApi += this.expressionToString(expression, result);
      });
      resultFromApi += "\n------done";
      this.setState({
        history: `${history}${resultFromApi}`,
        isCalculated : true,
      });
    }
  };
  calculate = (expession) => {
    if (this.isExpressionValid(expession)) {
      let numbers = expession.split(" ");
      let result;
      const operator = numbers[1];
      const num1 = parseFloat(numbers[0]);
      const num2 = parseFloat(numbers[2]);
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
      return result;
    }
  };

  operatorClick = (event) => {
    const { inputValue } = this.state;
    if (this.isExpressionValid(inputValue)) {
      const result = this.calculate(inputValue);
      const {history } = this.state;
      const expression = this.expressionToString(inputValue, result);
      this.setState({
        inputValue: `${result} ${event.target.textContent} `,
        history: `${history}${expression}`
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
    return (
      <>
        <div>
          <textarea value={history} readOnly={true} />
          <br />
          <input readOnly={true} value={inputValue} type="text" />
          <CalButton value="=" action={this.onCalculateClick} />
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
          onClick={() => {
            expressionsActions.fetchExpressions({
              amount: 5,
            })(this.props.dispatch);
            this.onGetFromApiClick();
          }}
        >
          Get from Api
        </button>
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
