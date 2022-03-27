import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  unitType: "Metric",
  error: { showError: false, errorMsg: "" },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUnitType(state, action) {
      state.unitType = action.payload.unitType;
    },
    setShowError(state, action) {
      state.error.showError = action.payload.showError;
      state.error.errorMsg = action.payload.errorMsg;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
