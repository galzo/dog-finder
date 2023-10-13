import { Box, alpha } from "@mui/material";
import { createStyleHook } from "../../../hooks/styleHooks";
import { FC } from "react";

const usePageDividerStyles = createStyleHook((theme, props: { size: "large" | "small" }) => {
  return {
    divider: {
      width: "100%",
      maxWidth: props.size === "large" ? "80%" : "40%",
      height: "1px",
      margin: "20px 0",
      backgroundColor: props.size === "large" ? alpha(theme.palette.divider, 0.4) : alpha(theme.palette.divider, 0.1),
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
    },
  };
});

export const PageDivider: FC<{ size: "large" | "small" }> = ({ size }) => {
  const styles = usePageDividerStyles({ size });
  return <Box sx={styles.divider} />;
};
