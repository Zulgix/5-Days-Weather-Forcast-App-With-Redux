import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { LightTooltip } from "../../../UI/customized";
import { favoritesActions } from "../../../redux/favorites-slice";
import commonClasses from "../../../UI/classes";

export default function FavoritesIconButton() {
  const classes = commonClasses();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favoriteLocations);
  const selectedLocation = useSelector((state) => state.home.selectedLocation);

  const isLocationInFavorites = favorites.find(
    (location) => location.Key === selectedLocation.Key
  );

  const favoritesClickedHandler = () => {
    if (isLocationInFavorites) {
      dispatch(
        favoritesActions.removeFromFavorites({
          locationKey: selectedLocation.Key,
        })
      );
    } else {
      dispatch(favoritesActions.addToFavorites({ location: selectedLocation }));
    }
  };
  return (
    <LightTooltip
      title={
        isLocationInFavorites ? "Remove from favorites" : "Add to favorites"
      }
      placement="top-end"
    >
      <IconButton
        size="medium"
        className={classes.favoritesButton}
        onClick={favoritesClickedHandler}
      >
        {isLocationInFavorites ? (
          <FavoriteIcon className={classes.favoritesSvg} />
        ) : (
          <FavoriteBorderIcon className={classes.favoritesSvg} />
        )}
      </IconButton>
    </LightTooltip>
  );
}
