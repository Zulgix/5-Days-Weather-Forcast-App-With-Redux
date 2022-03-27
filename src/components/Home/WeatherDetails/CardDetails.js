import React from "react";
import { Grid, Typography } from "@mui/material";
import { weatherIcons } from "../../../utils/constants";
import commonClasses from "../../../UI/classes";


export default function CardDetails({
  title,
  temperatureStr,
  description,
  iconId,
}) {
  const classes = commonClasses();

  return (
    <Grid container item className={classes.dataContainer}>
      <Grid container item xs={8} direction="column">
        <Typography variant="body2" align="left" style={{ color: "#aaa" }}>
          {title}
        </Typography>
        <Typography variant="h6" align="left">
          {temperatureStr}
        </Typography>
        <Typography variant="subtitle1" align="left" noWrap>
          {description}
        </Typography>
      </Grid>
      <Grid container item xs={4} justifyContent="center" alignItems="center">
        <img
          src={weatherIcons[iconId]}
          alt="weather-icon"
          style={{ width: "90px", height: "55px" }}
        />
      </Grid>
    </Grid>
  );
}
