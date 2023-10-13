import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { createStyleHook } from "../../../hooks/styleHooks";
import { PageToolbar } from "../PageToolbar/PageToolbar";

interface IPageContainerProps {
  children: ReactNode;
}

const usePageContainerStyles = createStyleHook((theme) => {
  return {
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: theme.palette.background.default,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
  };
});

export const PageContainer: FC<IPageContainerProps> = ({ children }) => {
  const styles = usePageContainerStyles();

  return (
    <Box sx={styles.root}>
      <PageToolbar />
      <Box sx={styles.content}>{children}</Box>
    </Box>
  );
};
