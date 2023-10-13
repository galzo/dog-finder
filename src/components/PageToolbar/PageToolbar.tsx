import { Box } from "@mui/material";
import { createStyleHook } from "../../hooks/styleHooks";

const usePageToolbarStyles = createStyleHook((theme) => {
  return {
    root: {
      width: "100%",
      height: "70px",
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    },
  };
});

export const PageToolbar = () => {
  const styles = usePageToolbarStyles();
  return <Box sx={styles.root}>{"Toolbar"}</Box>;
};
