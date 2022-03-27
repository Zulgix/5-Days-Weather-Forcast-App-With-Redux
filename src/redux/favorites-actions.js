import { accuweatherInstance, apikey } from "../utils/axios";
import { favoritesActions } from "./favorites-slice";
import { uiActions } from "./ui-slice";

export const getFavoritesData = (favorites) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsLoading(true));

    favorites.map(async (location, index) => {
      await accuweatherInstance
        .get(`/currentconditions/v1/${location.Key}`, {
          params: {
            apikey,
          },
        })
        .then((response) => {
          dispatch(
            favoritesActions.updateFavoritesData({ data: response.data, index })
          );
        })
        .catch(() => {
          dispatch(
            uiActions.setShowError({
              showError: true,
              errorMsg: "Failed to fetch data",
            })
          );
        });
    });

    dispatch(uiActions.setIsLoading(false));
  };
};
