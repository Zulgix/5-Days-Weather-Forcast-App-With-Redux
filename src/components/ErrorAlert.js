import React, { useCallback, useEffect } from "react";
import { uiActions } from "../redux/ui-slice";
import { errorMessages } from "../utils/constants";
import { getLocationByGeo } from "../redux/home-actions";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

function ErrorAlert() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.ui.error);

  const locationSuccess = useCallback(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(getLocationByGeo(latitude, longitude));
    },
    [dispatch]
  );

  const locationError = useCallback(() => {
    dispatch(
      uiActions.setShowError({
        showError: true,
        errorMsg: errorMessages.geolocationFailed,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  }, [locationSuccess, locationError]);

  const handleErrorClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(uiActions.setShowError({ flag: false }));
  };

  return (
    <Snackbar
      open={error.showError}
      autoHideDuration={5000}
      onClose={handleErrorClose}
    >
      <Alert onClose={handleErrorClose} severity="error">
        {error.errorMsg}
      </Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
