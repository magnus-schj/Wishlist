import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { currentUserSlice } from "../features/currentUser/currentUser.slice";
import { allUsersSlice } from "../features/allUsers/allUsers.slice";
import { ownWishListSlice } from "../features/ownWishList/ownWishList.slice";
import { displayedWishListSlice } from "../features/displayed-wishList/displayedWishList.slice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice.reducer,
    allUsers: allUsersSlice.reducer,
    ownWishList: ownWishListSlice.reducer,
    displayedWishList: displayedWishListSlice.reducer,
  },
  middleware: [thunk],
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;
