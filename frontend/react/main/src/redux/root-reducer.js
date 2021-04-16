import { combineReducers } from "redux";

import mockDataReducer from "./mock-data/mock-data.reducer";

export default combineReducers({
  mockData: mockDataReducer,
});
