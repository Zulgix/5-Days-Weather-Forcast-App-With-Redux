import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Paper, Grid, Typography } from "@mui/material";
import WeatherDetailsHeader from "./WeatherDetailsHeader";
import ForecastCards from "./ForecastCards";
import { Spinner } from "../../../UI/customized";
import commonClasses from "../../../UI/classes";


export default function WeatherDetails() {
  const classes = commonClasses();

  const isLoading = useSelector((state) => state.ui.isLoading);
  const currentWeather = useSelector(
    (state) => state.home.locationCurrentWeather
  );

  return (
    <Paper elevation={2} className={classes.weatherPaper}>
      <Grid container direction="column" style={{ height: "100%" }}>
        {!isLoading ? (
          <Grid item>
            <WeatherDetailsHeader />
            <Grid container item justifyContent="center" alignItems="center">
              <Typography variant="h3">
                {currentWeather[0]?.WeatherText}
              </Typography>
            </Grid>
            <ForecastCards />
          </Grid>
        ) : (
          Spinner(80)
        )}
      </Grid>
    </Paper>
  );
}
