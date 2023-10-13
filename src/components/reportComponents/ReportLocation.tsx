import { Box, Button } from "@mui/material";
import { IconLocationCode } from "@tabler/icons-react";
import { createStyleHook } from "../../hooks/styleHooks";
import { RTLTextField } from "../pageComponents/RTLTextInput/RTLTextField";
import { AppTexts } from "../../consts/texts";

const useReportLocationStyles = createStyleHook((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      width: "200px",
      marginBottom: "24px",
    },
  };
});

export const ReportLocation = () => {
  const styles = useReportLocationStyles();

  return (
    <Box sx={styles.root}>
      <Button variant="contained" sx={styles.button}>
        <IconLocationCode style={{ marginRight: "6px" }} />
        {AppTexts.reportPage.sections.location.fields.cta}
      </Button>

      <RTLTextField
        rows={5}
        fullWidth
        multiline
        type="text"
        label={AppTexts.reportPage.sections.location.fields.locationDetails}
      />
    </Box>
  );
};
