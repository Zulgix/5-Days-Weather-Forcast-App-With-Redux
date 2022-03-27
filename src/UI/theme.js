import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B8DFD8",
    },
    secondary: {
      main: "#E8F6EF",
    },
    text: {
      primary: "#000726",
      secondary: "rgba(255,255,255, 0.8)",
    },
    error: {
      main: "#e76f51",
    },
    warning: {
      main: "#e9c46a",
    },
  },
});
export default theme;

