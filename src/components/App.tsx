import React from "react";
import logo from "./logo.svg";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/root/HomePage";
import { AppRoutes } from "../consts/routes";
import { ReportDogPage } from "../pages/dogs/ReportDogPage";
import { SearchDogPage } from "../pages/dogs/SearchDogPage";
import { createStyleHook } from "../hooks/styleHooks";

const useAppStyles = createStyleHook(() => {
  return {
    root: {
      height: "100%",
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: theme.palette.background.default,
    },
  };
});

export const App = () => {
  const styles = useAppStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.root}>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.root} element={<HomePage />} />
            <Route path={AppRoutes.dogs.report} element={<ReportDogPage />} />
            <Route path={AppRoutes.dogs.search} element={<SearchDogPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};
