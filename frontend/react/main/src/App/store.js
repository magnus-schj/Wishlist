import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { CurrentUserSlice } from "../features/currentUser/currentUser.slice";

export const store = configureStore({
  reducer: {
    currentUser: CurrentUserSlice.reducer,
  },
  middleware: [thunk],
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;
