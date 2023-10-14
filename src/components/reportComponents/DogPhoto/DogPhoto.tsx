import { FC } from "react";
import { createStyleHook } from "../../../hooks/styleHooks";
import { UploadPhoto } from "./UploadPhoto";
import { PageImage } from "../../pageComponents/PageImage/PageImage";
import { Box, Button } from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import { AppShadows } from "../../../consts/shadows";

const useDogPhotoStyles = createStyleHook((theme) => {
  return {
    root: {
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    photo: {
      width: "100%",
      maxWidth: "500px",
      minHeight: "188px",
      maxHeight: "350px",
      borderRadius: "8px",
      objectFit: "cover",
    },
    deleteButton: {
      position: "absolute",
      zIndex: "30",
      borderRadius: "100%",
      padding: "8px",
      backgroundColor: "white",
      right: 15,
      bottom: 15,
      boxShadow: "box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
      cursor: "pointer",
    },
  };
});

interface DogPhotoProps {
  onSelectImage: (file: File) => Promise<void>;
  selectedImageUrl?: string;
  clearSelection: VoidFunction;
}

export const DogPhoto: FC<DogPhotoProps> = ({ onSelectImage, selectedImageUrl, clearSelection }) => {
  const styles = useDogPhotoStyles();

  if (!selectedImageUrl) {
    return <UploadPhoto onSelectImage={onSelectImage} selectedImageUrl={selectedImageUrl} />;
  }

  return (
    <Box sx={styles.root}>
      <PageImage src={selectedImageUrl} alt="dog-photo" sx={styles.photo} />
      <Box sx={styles.deleteButton} onClick={() => clearSelection()}>
        <IconTrash strokeWidth={1.5} />
      </Box>
    </Box>
  );
};
