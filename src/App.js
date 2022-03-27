import "./App.css";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Favorites from "./containers/Favorites";
import Layout from "./components/Layout";
import ErrorAlert from "./components/ErrorAlert";

function App() {
  return (
    <Grid container className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
      <ErrorAlert />
    </Grid>
  );
}

export default App;
