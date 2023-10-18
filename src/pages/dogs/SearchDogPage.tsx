import {
  Box,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";
import { useImageSelection } from "../../hooks/useImageSelection";
import { IconSearch } from "@tabler/icons-react";
import { DogType } from "../../facades/payload.types";
import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { getImageBlob } from "../../utils/imageUtils";
import { SelectInputField } from "../../components/pageComponents/SelectInput/SelectInput";
import { useNavigate } from "react-router-dom";

export const SearchDogPage = withAuthenticationRequired(() => {
  const navigate = useNavigate();
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } =
    useImageSelection();
  const [dogType, setDogType] = useState(DogType.LOST);
  const onDogTypeChange = (event: SelectChangeEvent<unknown>) => {
    const dogType = event.target.value as DogType;
    setDogType(dogType);
  };
  const [isMissingPhoto, setIsMissingPhoto] = useState(false);

  const onClickSearch = async () => {
    if (!selectedImageUrl || !selectedImageFile) {
      setIsMissingPhoto(true);
      return;
    }

    if (!selectedImageUrl) {
      return;
    }
    const imageBlob = await getImageBlob(selectedImageUrl);
    const payload = {
      type: dogType,
      img: imageBlob,
    };

    navigate("/dog-finder/dogs/results", { state: payload });
    return;
  };

  return (
    <PageContainer>
      <Box
        height={"100%"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"24px"}
      >
        <PageTitle text={AppTexts.searchPage.title} />
        <DogPhoto
          onSelectImage={onSelectImage}
          selectedImageUrl={selectedImageUrl}
          clearSelection={clearSelection}
          isError={isMissingPhoto}
        />
        <Box mt={3} mb={1}>
          <SelectInputField onChange={onDogTypeChange} value={dogType} />
        </Box>
        <Button size="large" variant="contained" onClick={onClickSearch}>
          <IconSearch style={{ marginRight: "8px" }} stroke={1.5} />
          {AppTexts.searchPage.submit}
        </Button>
      </Box>
    </PageContainer>
  );
});
