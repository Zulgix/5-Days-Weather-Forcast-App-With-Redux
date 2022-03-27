import React from "react";
import { Grid } from "@mui/material";
import CurrentWeather from "./CurrentWeather";
import FavoritesIconButton from "./FavoritesIconButton";

export default function WeatherDetailsHeader() {
  return (
    <Grid
      container
      item
      justifyContent="space-between"
      style={{ padding: "0 1rem" }}
    >
      <Grid container item xs={10}>
        <CurrentWeather />
      </Grid>
      <Grid container item xs={2} justifyContent="flex-end">
        <FavoritesIconButton />
      </Grid>
    </Grid>
  );
}
