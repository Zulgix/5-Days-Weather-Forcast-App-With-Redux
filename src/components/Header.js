import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../redux/ui-slice";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import commonClasses from "../UI/classes";
import ZoomAnim from "../animations/ZoomAnim";

function Header() {
  const dispatch = useDispatch();
  const unitType = useSelector((state) => state.ui.unitType);
  const classes = commonClasses();

  const unitTypeChangeHandler = () => {
    if (unitType === "Metric") {
      dispatch(uiActions.setUnitType({ unitType: "Imperial" }));
    } else {
      dispatch(uiActions.setUnitType({ unitType: "Metric" }));
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={6}
      className={classes.headerContainer}
    >
      <Grid container item xs={6} alignItems="center">
        <ZoomAnim>
          <Typography variant="h5" color="primary">
            Weather Forecast
          </Typography>
        </ZoomAnim>
      </Grid>
      <Grid
        container
        item
        xs={6}
        justifyContent="flex-end"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <Typography variant="h6">°C</Typography>
        </Grid>
        <Switch
          checked={unitType !== "Metric"}
          onChange={unitTypeChangeHandler}
          name="unitType"
          color="primary"
        />
        <Grid item>
          <Typography variant="h6">°F</Typography>
        </Grid>

        <Grid item xs={4}>
          <Link to="/home">
            <Button
              variant="contained"
              className={classes.headerButton}
              startIcon={<HomeIcon fontSize="large" />}
            >
              Home
            </Button>
          </Link>
          <Link to="/favorites">
            <Button
              variant="contained"
              className={classes.headerButton}
              startIcon={<FavoriteIcon fontSize="large" />}
            >
              Favorites
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
