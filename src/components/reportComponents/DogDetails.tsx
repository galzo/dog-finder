import { Box, TextField, TextFieldProps, alpha } from "@mui/material";
import { createStyleHook } from "../../hooks/styleHooks";
import { AppTexts } from "../../consts/texts";
import { RTLTextField } from "../pageComponents/RTLTextInput/RTLTextField";

const useDogDetailsStyles = createStyleHook((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: theme.palette.text.primary,
    },
  };
});

export const DogDetails = () => {
  const styles = useDogDetailsStyles();

  return (
    <Box sx={styles.root}>
      <RTLTextField
        label={AppTexts.reportPage.sections.dogDetails.fields.chipNumber}
        type="number"
        fullWidth
        margin="normal"
      />
      <RTLTextField
        rows={5}
        label={AppTexts.reportPage.sections.dogDetails.fields.description}
        fullWidth
        multiline
        type="text"
      />
    </Box>
  );
};
