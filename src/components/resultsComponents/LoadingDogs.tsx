import { AppTexts } from "../../consts/texts";
import { Typography, useTheme } from "@mui/material";

export const LoadingDogs = () => {
  const theme = useTheme();

  return (
    <Typography variant="h4" color={theme.palette.text.primary}>
      {AppTexts.resultsPage.loading}
    </Typography>
  );
};
