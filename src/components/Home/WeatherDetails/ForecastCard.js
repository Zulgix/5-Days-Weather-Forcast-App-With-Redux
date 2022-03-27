import React from "react";
import dayjs from "dayjs";
import { Paper, Grid, Typography } from "@mui/material";
import CardDetails from "./CardDetails";
import commonClasses from "../../../UI/classes";

export default function ForecastCard({ day }) {
  const classes = commonClasses();

  return (
    <Paper elevation={2} className={classes.forecastPaper}>
      <Grid container direction="column" className={classes.forecastContainer}>
        <Grid item className={classes.forecastHeader}>
          <Typography variant="h6" display="inline">
            {dayjs(day.Date).format("ddd")}{" "}
          </Typography>
          <Typography variant="subtitle2" display="inline">
            {dayjs(day.Date).format("DD/MM/YY")}
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          className={classes.forecastBody}
        >
          <CardDetails
            title="DAY"
            temperatureStr={`${day.Temperature.Maximum.Value}° ${day.Temperature.Maximum.Unit}`}
            description={day.Day.IconPhrase}
            iconId={day.Day.Icon}
          />
          <CardDetails
            title="NIGHT"
            temperatureStr={`${day.Temperature.Minimum.Value}° ${day.Temperature.Minimum.Unit}`}
            description={day.Night.IconPhrase}
            iconId={day.Night.Icon}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
