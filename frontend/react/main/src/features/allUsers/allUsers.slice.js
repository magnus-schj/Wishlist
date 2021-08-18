import { createSlice } from "@reduxjs/toolkit";

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: { loaded: false, users: [] },
  reducers: {
    updateAllUsers(state, action) {
      state.loaded = false;
      state.users.length = 0;
      action.payload.forEach((user) => {
        state.users.push(user);
      });
      state.loaded = true;
    },
  },
});

export const { updateAllUsers } = allUsersSlice.actions;
