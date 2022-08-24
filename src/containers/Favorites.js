import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Paper } from "@mui/material";
import { getFavoritesData } from "../redux/favorites-actions";
import { homeActions } from "../redux/home-slice";
import FavoriteCard from "../components/Favorites/FavoriteCard";
import { Spinner } from "../UI/customized";
import commonClasses from "../UI/classes";

export default function Favorites() {
  const classes = commonClasses();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.ui.isLoading);
  const favoriteLocations = useSelector(
    (state) => state.favorites.favoriteLocations
  );
  const favoritesData = useSelector((state) => state.favorites.favoritesData);
  const unitType = useSelector((state) => state.ui.unitType);

  useEffect(() => {
    console.log(favoriteLocations);
    if (favoriteLocations.length) {
      dispatch(getFavoritesData(favoriteLocations));
    }
  }, [favoriteLocations, dispatch]);

  const locationClickedHandler = (location) => {
    dispatch(homeActions.setSelectedLocation({ selectedLocation: location }));
  };

  const cards = [];
  if (!favoriteLocations.length) {
    cards.push(
      <Paper elevation={2} className={classes.noFavoritesPaper}>
        <Grid container>
          <Typography variant="h6">
            There are no favorite locations to display
          </Typography>
        </Grid>
      </Paper>
    );
  }
  if (favoritesData.length === favoriteLocations.length && !isLoading) {
    favoritesData.map((locationData, index) =>
      cards.push(
        <Grid
          key={favoriteLocations[index].LocalizedName}
          container
          item
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          className={classes.favCardContainer1}
          onClick={() => locationClickedHandler(favoriteLocations[index])}
        >
          <Grid item>
            <FavoriteCard
              name={favoriteLocations[index].LocalizedName}
              temperature={`${locationData[0]?.Temperature[unitType].Value} °${locationData[0]?.Temperature[unitType].Unit}`}
              description={locationData[0].WeatherText}
              iconId={locationData[0].WeatherIcon}
            />
          </Grid>
        </Grid>
      )
    );
  }

  return (
    <Grid
      container
      spacing={2}
      alignItems={!favoriteLocations.length ? "center" : "flex-start"}
      justifyContent="center"
      className={classes.favoritesContainer}
    >
      {!isLoading ? cards : Spinner(80)}
    </Grid>
  );
}
