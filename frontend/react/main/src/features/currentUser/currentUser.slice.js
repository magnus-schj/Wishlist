import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "current user",
  initialState: { loaded: false },
  reducers: {
    setCurrentUser(state, action) {
      state.loaded = false;
      state.userInfo = action.payload;
      if (action.payload) {
        state.loaded = true;
      }
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;
