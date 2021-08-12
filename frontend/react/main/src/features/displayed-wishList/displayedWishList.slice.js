import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const getWishList = createAsyncThunk()

const INITIAL_STATE = {
  loaded: false,
  uid: null,
  wishes: [],
};

export const displayedWishListSlice = createSlice({
  name: "displayed wishlist",
  initialState: INITIAL_STATE,

  reducers: {
    getWishList(state, { payload }) {
      // console.log("payload:", payload);
      console.log("here");
      state.loaded = false;
      // state.wishes = payload;
      state.loaded = true;
    },
    getUid(state, { payload }) {
      state.loaded = false;
      state.uid = payload;
      state.loaded = true;
    },
  },
});

export const { getWishList, getUid } = displayedWishListSlice.actions;
