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
    getUid(state, { payload }) {
      state.loaded = false;
      state.uid = payload;
      state.loaded = true;
    },
  },
});

export const { getUid } = displayedWishListSlice.actions;
