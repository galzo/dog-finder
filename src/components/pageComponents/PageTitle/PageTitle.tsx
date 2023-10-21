import { Box, Typography, useTheme } from "@mui/material";
import React, { FC } from "react";

interface PageTitleProps {
    text: string;
}

export const PageTitle: FC<PageTitleProps> = ({ text }) => {
    const theme = useTheme();
    return (
        <Box marginBottom="20px">
            <Typography variant="h3" color={theme.palette.text.primary}>
                {text}
            </Typography>
        </Box>
    );
};
