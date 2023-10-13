import { Box, Button } from "@mui/material";
import { IconLocation, IconLocationCode } from "@tabler/icons-react";

export const ReportLocation = () => {
  return (
    <Box>
      <Button variant="contained">
        <IconLocationCode style={{ marginRight: "6px" }} />
        {"לחץ להוספת מיקום"}
      </Button>
    </Box>
  );
};
