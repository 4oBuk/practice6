const initialState = {
  list: [],
  name: "Expressions from back-end",
  isCalculated: true,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_EXPRESSIONS": {
      return {
        ...state,
      };
    }
    case "RECEIVE_EXPRESSIONS": {
      const { expressions } = action;
      return {
        ...state,
        list: expressions,
        isCalculated: false,
      };
    }
    case "ERROR_RECEIVE_EXPRESSIONS": {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
