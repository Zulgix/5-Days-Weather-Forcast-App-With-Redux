import { makeStyles } from "@mui/styles";
import * as colors from "../UI/colors";

const commonClasses = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: "white",
    opacity: "0.7",
    transition: "0.5s",
    "&:hover": {
      opacity: 1,
    },
    padding: "20px 20px",
  },

  headerButton: {
    "&:hover": {
      backgroundColor: "#ffffff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#3c52b2",
    },

    display: "inline-block",
    borderRadius: "12px",
    color: "black",
    backgroundColor: "primary",
  },

  //home page classes.
  homeContainer: {
    height: "100%",
    width: "100%",
  },
  searchContainer: {
    marginTop: "3vh",
    marginBottom: "3vh",
    width: "fit-content",
  },
  homePaper: {
    width: "70%",
    backgroundColor: "rgba(255,255,255, 0.4)",
    padding: "2rem",
  },

  //favorite page classes
  favoritesContainer: {
    height: "100%",
    width: "100%",
    padding: "3rem 6rem",
  },
  favCardContainer: {
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "30%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25%",
    },
  },
  noFavoritesPaper: {
    height: "fit-content",
    padding: "30px",
  },
  //card details:
  dataContainer: {
    height: "50%",
    padding: "12px",
    borderBottom: "1px solid #eee",
  },
  //fav card:
  favCardPaper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#EBEBEB",
    },
  },
  favCardContainer1: {
    padding: "24px",
    height: "100%",
  },
  //favIconButton:
  favoritesButton: {
    height: "fit-content",
    color: colors.favoritesColor,
    transition: "0.3s",
    "&:hover": {
      opacity: 0.8,
    },
  },
  favoritesSvg: {
    height: "32px",
    width: "32px",
  },
  //forecastCard:
  forecastPaper: {
    width: "100%",
    overflow: "hidden",
  },
  forecastContainer: {
    height: "100%",
  },
  forecastHeader: {
    padding: "8px 16px",
    borderBottom: "1px solid #eee",
  },
  forecastBody: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  //ForecastCardsss:
  cardsContainer: {
    flex: 1,
    padding: "40px",
  },
  cardContainer: {
    minWidth: "175px",
  },
  //WeatherDetails:
  weatherPaper: {
    width: "70%",
    backgroundColor: "rgba(255,255,255, 0.4)",
    padding: "1.5rem",
  },
}));

export default commonClasses;
