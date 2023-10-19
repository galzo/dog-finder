import { AppRoutes } from "../../consts/routes";
import { AppTexts } from "../../consts/texts";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { createStyleHook } from "../../hooks/styleHooks";
import { useNavigate } from "react-router-dom";

const useNoResultsStyles = createStyleHook((theme) => { 
  return {
    button: {
      width: "200px"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
      gap: "20px"
    }
  };
});

export const NoDogs = () => {
  const theme = useTheme();
  const styles = useNoResultsStyles();
  const navigate = useNavigate();

  return (
    <Box sx={styles.content}>
      <Box>
        <Typography variant="h5" color={theme.palette.text.primary}>
          {AppTexts.resultsPage.noResults.title}
        </Typography>
      </Box>
      <Button size="large" variant="contained" sx={styles.button} onClick={() => navigate(AppRoutes.dogs.reportLost)}>
          {AppTexts.resultsPage.noResults.reportMissingDog}
      </Button> 
    </Box>
  );
};
