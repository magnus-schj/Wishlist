import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loaded: false,
  uid: null,
  wishes: [],
};

export const displayedWishListSlice = createSlice({
  name: "displayed wishlist",
  initialState: INITIAL_STATE,

  reducers: {
    getDisplayedWishList(state, { payload }) {
      state.loaded = false;
      state.wishes.length = 0;
      state.wishes = payload.wishes;
      state.loaded = true;
    },
    getUid(state, { payload }) {
      state.loaded = false;
      state.uid = payload;
      state.loaded = true;
    },
  },
});

export const { getDisplayedWishList, getUid } = displayedWishListSlice.actions;
