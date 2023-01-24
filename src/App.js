import CalButton from "./CalculatorButton";
import React, { useRef } from "react";
function App() {
  const calculatorInput = useRef(null);
  const onButtonClick = (e) => {
    console.log(e);
    console.log(calculatorInput.current.value);
    console.log(e.target.textContent);
    calculatorInput.current.value += e.target.textContent;
  };
  return (
    <>
      <input readOnly={true} ref={calculatorInput} type="text" />
      <CalButton value="=" action={onButtonClick} />
      <br />
      <CalButton value="+" action={onButtonClick}/>
      <CalButton value="-" action={onButtonClick}/>
      <CalButton value="/" action={onButtonClick}/>
      <CalButton value="*" action={onButtonClick}/>
      <br />
      <CalButton value="0" action={onButtonClick}/>
      <CalButton value="1" action={onButtonClick}/>
      <CalButton value="2" action={onButtonClick}/>
      <br />
      <CalButton value="3" action={onButtonClick}/>
      <CalButton value="4" action={onButtonClick}/>
      <CalButton value="5" action={onButtonClick}/>
      <br />
      <CalButton value="6" action={onButtonClick}/>
      <CalButton value="7" action={onButtonClick}/>
      <CalButton value="8" action={onButtonClick}/>
      <br />
      <CalButton value="0" action={onButtonClick}/>
    </>
  );
}

export default App;
