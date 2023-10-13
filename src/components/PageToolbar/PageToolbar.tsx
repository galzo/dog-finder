import { Box } from "@mui/material";
import { createStyleHook } from "../../hooks/styleHooks";

const usePageToolbarStyles = createStyleHook((theme) => {
  return {
    root: {
      width: "100%",
      height: "70px",
      backgroundColor: theme.palette.background.paper,
    },
  };
});

export const PageToolbar = () => {
  const styles = usePageToolbarStyles();
  return <Box sx={styles.root}>{"Toolbar"}</Box>;
};
