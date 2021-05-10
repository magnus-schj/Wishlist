import MOCK_DATA from "../../assets/MockData";
import MockDataActionTypes from "./mock-data.types";
import { removeWish, logIn } from "./mock-data.utils";

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

    case MockDataActionTypes.LOG_IN:
      return {
        ...state,
        data: logIn(state.data, action.payload),
      };
    // case MockDataActionTypes.SET_MOCK_DATA:
    //   return {
    //     mockData: action.payload,
    //   };

    default:
      return state;
  }
};

export default mockDataReducer;
