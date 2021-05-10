import MOCK_DATA from "../../assets/MockData";
import MockDataActionTypes from "./mock-data.types";

const INITIAL_STATE = MOCK_DATA;

const mockDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MockDataActionTypes.SET_MOCK_DATA:
      return {
        mockData: action.payload,
      };

    case MockDataActionTypes.DELETE_WISH:
      const currentUserIndex = state.indexOf(
        state.find((user) => user.name === action.payload.name)
      );
      const wishesLeft = state[currentUserIndex].wishes.filter(
        (wish) => wish !== action.payload.id
      );
      let newState = state;
      newState[currentUserIndex].wishes = wishesLeft;
      return newState;

    // case MockDataActionTypes.TEST_CASE:
    //   const currentUserIndex = state.indexOf(
    //     state.find((user) => user.name === action.payload.name)
    //   );

    default:
      return state;
  }
};

export default mockDataReducer;
