import { createSlice } from "@reduxjs/toolkit";

const nameSpace = "styles";
export const stylesSlice = createSlice({
  name: nameSpace,
  initialState: { loaded: false, mobile: null },
  reducers: {
    setMobile(state, { payload }) {
      state.loaded = false;
      state.mobile = payload;
      state.loaded = true;
    },
  },
});

export const { setMobile } = stylesSlice.actions;
