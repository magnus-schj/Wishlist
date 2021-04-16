const INITIAL_STATE = {
  message: "suksess!",
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TEST":
      return {
        ...state,
        wishes: action.payload,
      };

    default:
      return state;
  }
};

export default testReducer;
