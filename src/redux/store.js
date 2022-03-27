import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home-slice";
import uiReducer from "./ui-slice";
import favoritesReducer from "./favorites-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    home: homeReducer,
    favorites: favoritesReducer,
  },
});

export default store;
