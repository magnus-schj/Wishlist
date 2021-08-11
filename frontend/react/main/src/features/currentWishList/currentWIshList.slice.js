import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loaded: false,
  uID: null,
};

export const currentWishListSlice = createSlice({
  name: "currentWishList",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentWishList(state, { payload }) {
      state.loaded = false;
      state.uID = payload;
      state.loaded = true;
    },
  },
});
