import UserLoggedInTypes from "./userLoggedIn.types";

const INITIAL_STATE = null;
const userLoggedInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserLoggedInTypes.LOG_IN:
      console.log("user logged in:", action.payload);
      return action.payload;

    default:
      console.log("default");
      return state;
  }
};

export default userLoggedInReducer;
