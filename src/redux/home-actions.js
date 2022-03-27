import { accuweatherInstance, apikey } from "../utils/axios";
import { errorMessages } from "../utils/constants";
import { homeActions } from "./home-slice";
import { uiActions } from "../redux/ui-slice";

export const getLocationByGeo = (lat, lon) => {
  return (dispatch) => {
    dispatch(uiActions.setIsLoading(true));

    accuweatherInstance
      .get(`/locations/v1/cities/geoposition/search`, {
        params: {
          apikey,
          q: `${lat},${lon}`,
        },
      })
      .then((response) => {
        dispatch(
          homeActions.setSelectedLocation({ selectedLocation: response.data })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.setShowError({
            showError: true,
            errorMsg: errorMessages.geolocationFailed,
          })
        );
      });

    dispatch(uiActions.setIsLoading(false));
  };
};

export const getLocationsOptions = (str) => {
  return (dispatch) => {
    accuweatherInstance
      .get(`/locations/v1/cities/autocomplete`, {
        params: {
          apikey,
          q: str,
        },
      })
      .then((response) => {
        dispatch(
          homeActions.updateLocationsOptions({ locations: response.data })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.setShowError({
            showError: true,
            errorMsg: errorMessages.fetchFailed,
          })
        );
      });
  };
};

export const getLocationWeather = (selectedLocation, unitType) => {
  return (dispatch) => {
    dispatch(uiActions.setIsLoading(true));

    accuweatherInstance
      .get(`/currentconditions/v1/${selectedLocation.Key}`, {
        params: {
          apikey,
        },
      })
      .then((response) => {
        dispatch(
          homeActions.setLocationCurrentWeather({
            locationCurrentWeather: response.data,
          })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.setShowError({
            showError: true,
            errorMsg: errorMessages.fetchFailed,
          })
        );
      });

    accuweatherInstance
      .get(`/forecasts/v1/daily/5day/${selectedLocation.Key}`, {
        params: {
          apikey,
          metric: unitType === "Metric",
        },
      })
      .then((response) => {
        dispatch(
          homeActions.setLocationFiveDayForecast({
            locationFiveDayForecast: response.data,
          })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.setShowError({
            showError: true,
            errorMsg: errorMessages.fetchFailed,
          })
        );
      });

    dispatch(uiActions.setIsLoading(false));
  };
};
