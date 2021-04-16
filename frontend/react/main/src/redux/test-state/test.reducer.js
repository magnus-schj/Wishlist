const INITIAL_STATE = {
  message: "suksess!",
  number: 0,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TEST":
      return {
        ...state,
        wishes: action.payload,
      };

    case "SET_NUMBER":
      return {
        ...state,
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
