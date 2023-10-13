import { Box, Button } from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { IconCamera, IconCameraBolt, IconCameraCheck, IconCameraCode } from "@tabler/icons-react";

export const UploadImage = () => {
  return (
    <Box>
      <Button variant="contained">
        <IconCameraCode style={{ marginRight: "8px" }} />
        {AppTexts.reportPage.sections.upload.cta}
      </Button>
    </Box>
  );
};
