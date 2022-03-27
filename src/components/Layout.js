import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <Grid container>
      <Header />
      <Outlet />
    </Grid>
  );
}

export default Layout;
