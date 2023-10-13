import { Box, Typography, useTheme } from "@mui/material";
import { PageContainer } from "../components/PageContainer/PageContainer";

export const HomePage = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <Typography variant="h3" color={theme.palette.text.secondary}>
        {"Home page"}
      </Typography>
    </PageContainer>
  );
};
