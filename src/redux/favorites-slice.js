import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteLocations: [],
  favoritesData: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favoriteLocations.push(action.payload.location);
    },
    removeFromFavorites(state, action) {
      const index = state.favoriteLocations.findIndex(
        (location) => location.Key === action.payload.locationKey
      );

      // console.log(index);

      state.favoriteLocations = state.favoriteLocations.filter(
        (location) => location.Key !== action.payload.locationKey
      );
      state.favoritesData = state.favoritesData.splice(index, 1);
    },
    updateFavoritesData(state, action) {
      state.favoritesData[action.payload.index] = action.payload.data;
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
