import CalButton from "./CalculatorButton";
import React from "react";

const onButtonClick = (e) => {
  console.log(e);
  // calculatorInput.current.value += e.target.textContent;
};
class App extends React.Component {
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
    return (
      <>
        <input readOnly={true} /*ref={calculatorInput}*/ type="text" />
        <CalButton value="=" action={onButtonClick} />
        <br />
        <CalButton value="+" action={onButtonClick} />
        <CalButton value="-" action={onButtonClick} />
        <CalButton value="/" action={onButtonClick} />
        <CalButton value="*" action={onButtonClick} />
        <br />
        <CalButton value="0" action={onButtonClick} />
        <CalButton value="1" action={onButtonClick} />
        <CalButton value="2" action={onButtonClick} />
        <br />
        <CalButton value="3" action={onButtonClick} />
        <CalButton value="4" action={onButtonClick} />
        <CalButton value="5" action={onButtonClick} />
        <br />
        <CalButton value="6" action={onButtonClick} />
        <CalButton value="7" action={onButtonClick} />
        <CalButton value="8" action={onButtonClick} />
        <br />
        <CalButton value="0" action={onButtonClick} />
      </>
    );
  }
}

export default App;
