import { Grid, Switch, Tooltip, CircularProgress } from "@mui/material";
import { withStyles } from "@mui/styles";

export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export const Spinner = (size) => (
  <Grid
    item
    container
    justifyContent="center"
    alignItems="center"
    style={{ display: "flex", height: "100%" }}
  >
    <CircularProgress size={size} />
  </Grid>
);

export const CustomSwitch = withStyles((theme) => ({
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
