import CalButton from "./CalculatorButton";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import expressionsReducer from "./Expressions/reducers/expressions";
import Calculator from "./Expressions/containers/Calculator";
const store = createStore(expressionsReducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}

export default App;
