import { createSlice } from "@reduxjs/toolkit";
import { defaultLocationData } from "../utils/constants";

const initialState = {
  locationsOptions: [],
  selectedLocation: defaultLocationData,
  locationCurrentWeather: [],
  locationFiveDayForecast: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateLocationsOptions(state, action) {
      state.locationsOptions = action.payload.locations;
    },
    setSelectedLocation(state, action) {
      state.selectedLocation = action.payload.selectedLocation;
    },
    setLocationCurrentWeather(state, action) {
      state.locationCurrentWeather = action.payload.locationCurrentWeather;
    },
    setLocationFiveDayForecast(state, action) {
      state.locationFiveDayForecast = action.payload.locationFiveDayForecast;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
