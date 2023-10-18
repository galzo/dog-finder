import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { createStyleHook } from "../../../hooks/styleHooks";
import { IconGridDots, IconPaw } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../consts/routes";
import { AppShadows } from "../../../consts/shadows";
import UserComponent from "../UserComponent/UserComponent";
import { useState } from "react";
import { AppTexts } from "../../../consts/texts";

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
    menuButton: {
      position: "absolute",
      left: 20,
      borderRadius: 0,
      "&:hover, &.Mui-focusVisible": { 
        backgroundColor: theme.palette.primary.light
      },
    },
    menuItem: {
      "&:hover, &.Mui-focusVisible": { 
        backgroundColor: theme.palette.primary.light
      },
      backgroundColor: theme.palette.background.paper,
    }
  };
});

export const PageToolbar = () => {
  const styles = usePageToolbarStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

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
      <IconButton
                onClick={handleOpenMenu}
                sx={styles.menuButton}
            >
          <IconGridDots
            strokeWidth={1.5}
            color={theme.palette.text.primary}
          />
      </IconButton>
      <Menu
              open={isMenuOpen}
              onClose={handleCloseMenu}
              anchorEl={anchorEl}
          >
              <MenuItem onClick={() => navigate(AppRoutes.root)} sx={styles.menuItem}>
                {AppTexts.navigation.home}
              </MenuItem>
              <MenuItem onClick={() => navigate(AppRoutes.dogs.search)} sx={styles.menuItem}>
                {AppTexts.navigation.search}
              </MenuItem>
              <MenuItem onClick={() => navigate(AppRoutes.dogs.report)} sx={styles.menuItem}>
                {AppTexts.navigation.report}
              </MenuItem>
          </Menu>
    </Box>
  );
};
