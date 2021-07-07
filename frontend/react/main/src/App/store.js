import { configureStore } from "@reduxjs/toolkit";
import { CurrentUserSlice } from "../features/currentUser/currentUser.slice";

export const store = configureStore({
  reducer: {
    currentUser: CurrentUserSlice.reducer,
  },
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;
