import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultsList: [],
};
export const resultsSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    getResultsList: (state, action) => {
      state.resultsList = action.payload;
    },
  },
});
export const { getResultsList } = resultsSlice.actions;

export default resultsSlice.reducer;
