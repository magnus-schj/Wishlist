import { createSlice } from "@reduxjs/toolkit";

export const CurrentUserSlice = createSlice({
  name: "current user",
  initialState: { loaded: false },
  reducers: {
    setCurrentUser(state, action) {
      state.loaded = false;
      state.userInfo = action.payload;
      state.loaded = true;
    },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;
