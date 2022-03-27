import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import WeatherDetails from "../components/Home/WeatherDetails/WeatherDetails";
import { homeActions } from "../redux/home-slice";
import { getLocationsOptions, getLocationWeather } from "../redux/home-actions";
import commonClasses from "../UI/classes";
import { debounce } from "lodash";

export default function Home() {
  const classes = commonClasses();
  const dispatch = useDispatch();
  const locationsOptions = useSelector((state) => state.home.locationsOptions);
  const selectedLocation = useSelector((state) => state.home.selectedLocation);
  const unitType = useSelector((state) => state.ui.unitType);

  useEffect(() => {
    dispatch(getLocationWeather(selectedLocation, unitType));
  }, [selectedLocation, dispatch, unitType]);

  const debounceFetch = useCallback(
    debounce((str) => dispatch(getLocationsOptions(str)), 500),
    []
  );

  const fetchLocations = (event) => {
    const str = event.target.value;
    if (str.length >= 2) {
      debounceFetch(str);
    }
  };

  const selectedLocationHandler = (_, value) => {
    value &&
      dispatch(homeActions.setSelectedLocation({ selectedLocation: value }));
  };

  console.log(selectedLocation);
  return (
    <Grid container item alignItems="center" className={classes.homeContainer}>
      <Grid item className={classes.searchContainer} xs={12}>
        <Autocomplete
          id="locations"
          autoHighlight
          options={locationsOptions}
          onChange={selectedLocationHandler}
          value={selectedLocation}
          getOptionLabel={(option) => option?.LocalizedName}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Choose location"
              size="small"
              onChange={fetchLocations}
              style={{
                padding: "40px 40px",
                width: "200px",
              }}
            />
          )}
        />
      </Grid>
      <Grid container item justifyContent="center" style={{ height: "75%" }}>
        {/* <ZoomAnim>  */}
        <WeatherDetails />
        {/* </ZoomAnim> */}
      </Grid>
    </Grid>
  );
}
