import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { weatherIcons } from "../../utils/constants";
import commonClasses from "../../UI/classes";

export default function FavoriteCard({
  name,
  temperature,
  description,
  iconId,
}) {
  const classes = commonClasses();

  return (
    <Paper elevation={2} className={classes.favCardPaper}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        className={classes.favCardContainer}
      >
        <Grid item style={{ whiteSpace: "nowrap" }}>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          style={{ height: "fit-content" }}
        >
          <Typography variant="h6">{temperature}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">{description}</Typography>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          style={{ height: "fit-content" }}
        >
          <img
            src={weatherIcons[iconId]}
            alt="weather-icon"
            style={{ width: "75px", height: "45px" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
