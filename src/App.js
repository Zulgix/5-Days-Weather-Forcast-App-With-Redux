import "./App.css";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Favorites from "./containers/Favorites";
import ErrorAlert from "./components/ErrorAlert";
import Header from "./components/Header";

function App() {
  return (
    <Grid container className="App">
      <Header />
      <Routes>
        <Route path="/home">
          <Route index element={<Home />} />
        </Route>
        <Route path="favorites" element={<Favorites />} />
        <Route index element={<Home />} />
      </Routes>
      <ErrorAlert />
    </Grid>
  );
}

export default App;
