import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesWithElements } from "../consts/routes";
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
                        {routesWithElements.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.element {...route.props} />}
                            />
                        ))}
                        {/* //! path without an element */}
                        {/* <Route path={"/dog-finder/dogs/report"} /> */}
                    </Routes>
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
};
