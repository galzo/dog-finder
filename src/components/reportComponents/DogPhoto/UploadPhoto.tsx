import { Box, Typography } from "@mui/material";
import { AppTexts } from "../../../consts/texts";
import { IconCameraUp } from "@tabler/icons-react";
import { ChangeEvent, FC, useCallback, useRef } from "react";
import { acceptableFormats } from "../../../consts/formats";
import { createStyleHook } from "../../../hooks/styleHooks";
import { AppShadows } from "../../../consts/shadows";

interface UploadPhotoProps {
  onSelectImage: (file: File) => Promise<void>;
  selectedImageUrl?: string;
}

const useUploadPhotoStyles = createStyleHook((theme) => {
  return {
    root: {
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      justifyContent: "center",
      boxShadow: AppShadows.toolbarShadow,
    },
    uploadButon: {
      width: "100%",
      maxWidth: "500px",
      height: "188px",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "8px",
    },
  };
});

export const UploadPhoto: FC<UploadPhotoProps> = ({ onSelectImage, selectedImageUrl }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const styles = useUploadPhotoStyles();

  const handleChangeImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0];
      if (!file) return;

      onSelectImage(file);
    },
    [onSelectImage]
  );

  return (
    <Box sx={styles.root}>
      <input
        ref={imageInputRef}
        type="file"
        id="image"
        accept={acceptableFormats.join(", ")}
        onChange={handleChangeImage}
        hidden
        style={{ display: "none" }}
      />
      <Box sx={styles.uploadButon} onClick={() => imageInputRef?.current?.click()}>
        <IconCameraUp style={{ marginBottom: "8px" }} size={"60px"} strokeWidth={1} />
        <Typography>{AppTexts.reportPage.photo.cta}</Typography>
      </Box>
    </Box>
  );
};
