import { Typography, useTheme } from "@mui/material";
import AppTexts from "../../consts/texts";

const LoadingDogs = () => {
  const theme = useTheme();

  return (
    <Typography variant="h4" color={theme.palette.text.primary}>
      {AppTexts.resultsPage.loading}
    </Typography>
  );
};

export default LoadingDogs;
