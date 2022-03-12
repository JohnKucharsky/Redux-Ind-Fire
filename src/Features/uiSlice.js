import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { loading: false },
  reducers: {
    loadingStatus(state, action) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
