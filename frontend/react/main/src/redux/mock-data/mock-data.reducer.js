import { findAndDelete } from "./mock-data.utils";
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
      return findAndDelete(state, action.payload);
    default:
      return state;
  }
};

export default mockDataReducer;
