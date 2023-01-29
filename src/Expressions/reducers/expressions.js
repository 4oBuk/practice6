const initialState = {
  isLoading: false,
  list: [],
  name: "Expressions from back-end",
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_EXPRESSIONS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "RECEIVE_EXPRESSIONS": {
      const { expressions } = action;
      return {
        ...state,
        isLoading: false,
        list: expressions,
      };
    }
    case "ERROR_RECEIVE_EXPRESSIONS": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
