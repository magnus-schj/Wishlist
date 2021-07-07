import { createSlice } from "@reduxjs/toolkit";

export const CurrentUserSlice = createSlice({
  name: "current user",
  initialState: { name: "testUser" },
  reducers: {
    setCurrentUser(state) {
      state.name = "new user";
    },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;
