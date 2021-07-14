import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { db, formatCollection } from "../../firebase/firebase.utils";

export const fetchAllUserInfo = createAsyncThunk(
  "allUsers/requestStatus",
  async () => {
    const response = await db.collection("users").get();
    return response;
  }
);

const test = createAsyncThunk("allUsers/testRequestStatus", async () => {
  setTimeout(() => {
    console.log("test");
  }, 2000);
  return "suksess!";
});

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: { loaded: false, users: [] },
  reducers: {
    removeData(state) {
      state.users = [];
      state.loaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUserInfo.fulfilled, (state, action) => {
      state.loaded = false;
      state.users.length = 0;
      const usersFormatted = formatCollection(action.payload);
      usersFormatted.forEach((user) => state.users.push(user));
      state.loaded = true;
    });
  },
});
