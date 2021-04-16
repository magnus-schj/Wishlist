import { combineReducers } from "redux";
import testReducer from "./test-state/test.reducer";

export default combineReducers({
  test: testReducer,
});
