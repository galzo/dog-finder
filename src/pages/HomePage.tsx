import { Box, Button, Typography, useTheme } from "@mui/material";
import { PageContainer } from "../components/PageContainer/PageContainer";
import { createStyleHook } from "../hooks/styleHooks";
import { AppTexts } from "../consts/texts";
import { combineStyles } from "../utils/styleUtils";
import { IconDog, IconDogBowl, IconPaw, IconSearch } from "@tabler/icons-react";

const useHomePageStyles = createStyleHook((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
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
  const theme = useTheme();
  const styles = useHomePageStyles();
  return (
    <PageContainer>
      <Box sx={styles.root}>
        <Button size="large" variant="contained" sx={styles.button}>
          <IconPaw style={{ marginRight: "8px" }} stroke={1.5} />
          {AppTexts.homePage.cta.reportPage}
        </Button>
        <Button size="large" variant="contained" sx={styles.button}>
          <IconSearch style={{ marginRight: "8px" }} stroke={1.5} />
          {AppTexts.homePage.cta.searchPage}
        </Button>
      </Box>
    </PageContainer>
  );
};
