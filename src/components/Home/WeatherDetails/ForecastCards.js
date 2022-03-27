import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ForecastCard from "./ForecastCard";
import commonClasses from "../../../UI/classes";

export default function ForecastCards() {
  const classes = commonClasses();

  const fiveDayForecast = useSelector(
    (state) => state.home.locationFiveDayForecast
  );

  const cards = fiveDayForecast?.DailyForecasts?.map((day) => {
    return (
      <Grid
        key={day.Date}
        container
        item
        lg={2}
        md={4}
        sm={6}
        className={classes.cardContainer}
      >
        <ForecastCard day={day} />
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      className={classes.cardsContainer}
    >
      {cards}
    </Grid>
  );
}
