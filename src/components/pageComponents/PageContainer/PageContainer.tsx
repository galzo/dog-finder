import { Box, Fade } from "@mui/material";
import { FC, ReactNode } from "react";
import { createStyleHook } from "../../../hooks/styleHooks";
import { PageToolbar } from "../PageToolbar/PageToolbar";

interface IPageContainerProps {
  children: ReactNode;
}

export const usePageContainerStyles = createStyleHook(() => {
  return {
    root: {
      width: "100%",
      height: "100%",
      overflowY: "scroll",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    content: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      marginTop: "80px",
    },
  };
});

export const PageContainer: FC<IPageContainerProps> = ({ children }) => {
  const styles = usePageContainerStyles();

  return (
    <Box sx={styles.root}>
      <PageToolbar />
      <Fade in timeout={350}>
        <Box sx={styles.content}>{children}</Box>
      </Fade>
    </Box>
  );
};
