import { Box, Button, CircularProgress } from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";
import { useImageSelection } from "../../hooks/useImageSelection";
import { IconSearch } from "@tabler/icons-react";
import { useGetServerApi } from "../../facades/ServerApi";
import { DogType } from "../../facades/payload.types";
import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { getImageBlob } from "../../utils/imageUtils";

export const SearchDogPage = withAuthenticationRequired(() => {
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } = useImageSelection();
  const [isMissingPhoto, setIsMissingPhoto] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const getServerApi = useGetServerApi();

  const onClickSearch = async () => {
    if (!selectedImageUrl || !selectedImageFile) {
      setIsMissingPhoto(true);
      return;
    }

    setIsMissingPhoto(false);
    setIsLoading(true);

    const serverApi = await getServerApi();

    if (!selectedImageUrl) {
      return;
    }
    const imageBlob = await getImageBlob(selectedImageUrl)
    const payload  = {
      type: DogType.LOST, // TODO: change this to a dynamic value from the select field
      img: imageBlob
    };
    
    const response = await serverApi.query(payload);

    setIsLoading(false);
    if (response.status === 200) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <PageContainer>
      <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"24px"}>
        <PageTitle text={AppTexts.searchPage.title} />
        <DogPhoto
          onSelectImage={onSelectImage}
          selectedImageUrl={selectedImageUrl}
          clearSelection={clearSelection}
          isError={isMissingPhoto}
        />
        <Button size="large" variant="contained" onClick={onClickSearch}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <IconSearch style={{ marginRight: "8px" }} stroke={1.5} />
              {AppTexts.searchPage.submit}
            </>
          )}
        </Button>
      </Box>
    </PageContainer>
  );
});
