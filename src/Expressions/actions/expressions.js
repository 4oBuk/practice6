const requestExpressions = (expressions) => ({
  expressions,
  type: "REQUEST_EXPRESSIONS",
});

const receiveExpressions = (expressions) => ({
  expressions,
  type: "RECEIVE_EXPRESSIONS",
});

const errorReceiveExpressions = (expressions) => ({
  expressions,
  type: "ERROR_RECEIVE_EXPRESSIONS",
});

const EXPRESSIONS_GET = "http://localhost:8080/math/examples?amount=:value";

const getExpressions = (amount) => {
  return fetch(EXPRESSIONS_GET.replace(":value", amount)).then((response) =>
    response.json()
  );
};

const fetchExpressions =
  ({ amount }) =>
  (dispatch) => {
    dispatch(requestExpressions());
    return getExpressions(amount)
      .then((expressions) => dispatch(receiveExpressions(expressions)))
      .catch(() => dispatch(errorReceiveExpressions));
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchExpressions };
