import { Box } from "@mui/material";
import { createStyleHook } from "../../hooks/styleHooks";
import { RTLTextField } from "../pageComponents/RTLTextInput/RTLTextField";

const useOwnerDetailsStyles = createStyleHook((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

export const OwnerDetails = () => {
  const styles = useOwnerDetailsStyles();
  return (
    <Box sx={styles.root}>
      <RTLTextField label={"שם מלא"} type="text" fullWidth margin="normal" />
      <RTLTextField label={"מספר טלפון"} type="tel" fullWidth margin="normal" />
    </Box>
  );
};
