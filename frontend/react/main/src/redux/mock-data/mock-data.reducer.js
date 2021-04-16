import MOCK_DATA from "../../assets/MockData";

const INITIAL_STATE = {
  mockData: MOCK_DATA,
};

const mockDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MOCK_DATA":
      return {
        mockData: action.payload,
      };

    default:
      return state;
  }
};

export default mockDataReducer;
