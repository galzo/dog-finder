import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface PageTitleProps {
  text: string;
}

const PageTitle: FC<PageTitleProps> = ({ text }) => {
  const theme = useTheme();
  return (
    <Box marginBottom="20px">
      <Typography variant="h3" color={theme.palette.text.primary}>
        {text}
      </Typography>
    </Box>
  );
};

export default PageTitle;
