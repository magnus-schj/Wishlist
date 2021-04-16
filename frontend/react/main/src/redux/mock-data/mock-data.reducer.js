import MOCK_DATA from "../../assets/MockData";

const INITIAL_STATE = MOCK_DATA;

const mockDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_WISHES":
      return {
        ...state,
        wishes: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default mockDataReducer;
