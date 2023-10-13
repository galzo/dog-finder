import { Box, Button, ButtonOwnProps, Typography, useTheme } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { createStyleHook } from "../../hooks/styleHooks";
import { AppTexts } from "../../consts/texts";
import { combineStyles } from "../../utils/styleUtils";
import { IconDog, IconDogBowl, IconPaw, IconSearch, TablerIconsProps } from "@tabler/icons-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../consts/routes";

const useHomePageStyles = createStyleHook((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
      height: "100%",
    },
    pushRight: {
      marginRight: "24px",
    },
    pushLeft: {
      marginLeft: "24px",
    },
    button: {
      width: "200px",
    },
  };
});

export const HomePage = () => {
  const styles = useHomePageStyles();
  const navigate = useNavigate();

  const commonButtonProps: ButtonOwnProps = {
    size: "large",
    variant: "contained",
    sx: styles.button,
  };

  const commonIconProps: TablerIconsProps = {
    style: { marginRight: "8px" },
    stroke: 1.5,
  };

  return (
    <PageContainer>
      <Box sx={styles.root}>
        <Button {...commonButtonProps} onClick={() => navigate(AppRoutes.dogs.report)}>
          <IconPaw {...commonIconProps} />
          {AppTexts.homePage.cta.reportPage}
        </Button>
        <Button {...commonButtonProps} onClick={() => navigate(AppRoutes.dogs.search)}>
          <IconSearch {...commonIconProps} />
          {AppTexts.homePage.cta.searchPage}
        </Button>
      </Box>
    </PageContainer>
  );
};
