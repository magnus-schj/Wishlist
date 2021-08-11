import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loaded: false,
  uid: null,
  wishes: [],
};

export const currentWishListSlice = createSlice({
  name: "currentWishList",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentWishList(state, { payload }) {
      state.loaded = false;
      state.wishes.length = 0;
      state.uid = payload.uid;
      state.wishes = payload.wishes;
      state.loaded = true;
    },
  },
});

export const { setCurrentWishList } = currentWishListSlice.actions;
