import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loaded: false,
  uid: null,
  name: null,
};

export const displayedWishListSlice = createSlice({
  name: "displayed wishlist",
  initialState: INITIAL_STATE,

  reducers: {
    getUidAndName(state, { payload }) {
      state.loaded = false;
      state.uid = payload.uid;
      state.name = payload.name;
      state.loaded = true;
    },
  },
});

export const { getUidAndName } = displayedWishListSlice.actions;
