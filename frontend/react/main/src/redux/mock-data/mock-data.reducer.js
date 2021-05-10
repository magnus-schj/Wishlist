import MOCK_DATA from "../../assets/MockData";
import MockDataActionTypes from "./mock-data.types";
import { removeWish } from "./mock-data.utils";

const INITIAL_STATE = {
  data: MOCK_DATA,
};

const mockDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MockDataActionTypes.DELETE_WISH:
      return {
        ...state,
        data: removeWish(state.data, action.payload),
      };

    // case MockDataActionTypes.SET_MOCK_DATA:
    //   return {
    //     mockData: action.payload,
    //   };

    // case MockDataActionTypes.TEST_CASE:
    //   const currentUserIndex = state.indexOf(
    //     state.find((user) => user.name === action.payload.name)
    //   );

    default:
      return state;
  }
};

export default mockDataReducer;
