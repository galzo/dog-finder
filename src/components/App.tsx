import React from "react";
import logo from "./logo.svg";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/root/HomePage";
import { AppRoutes } from "../consts/routes";
import { ReportDogPage } from "../pages/dogs/ReportDogPage";
import { SearchDogPage } from "../pages/dogs/SearchDogPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.root} element={<HomePage />} />
          <Route path={AppRoutes.dogs.report} element={<ReportDogPage />} />
          <Route path={AppRoutes.dogs.search} element={<SearchDogPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
