import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { weatherIcons } from "../../../utils/constants";

export default function CurrentWeather() {
  const selectedLocation = useSelector((state) => state.home.selectedLocation);
  const currentWeather = useSelector(
    (state) => state.home.locationCurrentWeather
  );
  const unitType = useSelector((state) => state.ui.unitType);

  return (
    <Fragment>
      <Grid item>
        <img
          src={weatherIcons[currentWeather[0]?.WeatherIcon]}
          alt=""
          style={{ height: "70px" }}
        />
      </Grid>
      <Grid container item xs={6} alignItems="flex-start" direction="column">
        <Grid item>
          <Typography variant="h6">
            {selectedLocation?.LocalizedName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            {currentWeather[0] &&
              `${currentWeather[0]?.Temperature[unitType].Value} °${currentWeather[0]?.Temperature[unitType].Unit}`}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
