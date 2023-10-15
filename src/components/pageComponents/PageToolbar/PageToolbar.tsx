import { Box, useTheme } from "@mui/material";
import { createStyleHook } from "../../../hooks/styleHooks";
import { IconPaw } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../consts/routes";
import { AppShadows } from "../../../consts/shadows";
import UserComponent from "../UserComponent/UserComponent";

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
      boxShadow: AppShadows.toolbarShadow,
      position: "fixed",
      zIndex: 10,
    },
  };
});

export const PageToolbar = () => {
  const styles = usePageToolbarStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={styles.root}>
      <UserComponent />
      <IconPaw
        color={theme.palette.primary.light}
        fill={theme.palette.primary.main}
        style={{
          cursor: "pointer",
        }}
        stroke={0.5}
        size={60}
        onClick={() => navigate(AppRoutes.root)}
      />
    </Box>
  );
};
