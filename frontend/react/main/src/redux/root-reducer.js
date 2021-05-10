import { combineReducers } from "redux";
import mockDataReducer from "./mock-data/mock-data.reducer";
import testReducer from "./test-state/test.reducer";
import userLoggedInReducer from "./userLoggedIn/userLoggedIn.reducer";

export default combineReducers({
  test: testReducer,
  mockData: mockDataReducer,
  userLoggedIn: userLoggedInReducer,
});
