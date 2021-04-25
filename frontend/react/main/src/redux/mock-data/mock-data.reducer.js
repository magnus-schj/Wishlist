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

    case "DELETE_WISH":
      const newState = state;
      const currentUserInfo = newState.mockData.find(
        (user) => user.name === action.payload.name
      );
      currentUserInfo.wishes.splice(action.payload.id, 1);
      return newState;
    default:
      return state;
  }
};

export default mockDataReducer;
