import UserLoggedInTypes from "./userLoggedIn.types";

const INITIAL_STATE = null;
const userLoggedInReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case UserLoggedInTypes.LOG_IN:
      console.log("user logged in");
      break;

    default:
      return state;
  }
};

export default userLoggedInReducer;
