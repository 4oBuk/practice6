import React from "react";
import { connect } from "react-redux";
import expressionsActions from "../actions/expressions";

class Expressions extends React.Component {
  render() {
    console.log(this.props);
    return (
      <button
        onClick={() =>
          expressionsActions.fetchExpressions({
            amount: 5,
          })(this.props.dispatch)
        }
      >
        Get from Api
      </button>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  ...reduxState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(mapReduxStateToProps, mapDispatchToProps)(Expressions);
