import {Box, Button, CircularProgress, InputLabel, MenuItem, Select} from "@mui/material";
import {AppTexts} from "../../consts/texts";
import {PageContainer} from "../../components/pageComponents/PageContainer/PageContainer";
import {PageTitle} from "../../components/pageComponents/PageTitle/PageTitle";
import {DogPhoto} from "../../components/reportComponents/DogPhoto/DogPhoto";
import {useImageSelection} from "../../hooks/useImageSelection";
import {IconSearch} from "@tabler/icons-react";
import {useGetServerApi} from "../../facades/ServerApi";
import {DogStatus} from "../../facades/payload.types";
import {useState} from "react";
import {withAuthenticationRequired} from "@auth0/auth0-react";

export const SearchDogPage = withAuthenticationRequired(() => {
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } = useImageSelection();
  const [isMissingPhoto, setIsMissingPhoto] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
  const [dogStatus, setDogStatus] = useState<string>(DogStatus.LOST);

  const getServerApi = useGetServerApi();

  const onClickSearch = async () => {
    if (!selectedImageUrl || !selectedImageFile) {
      setIsMissingPhoto(true);
      return;
    }

    setIsMissingPhoto(false);
    setIsLoading(true);

    const serverApi = await getServerApi();

    const imageResponse = await fetch(selectedImageUrl);
    const imageBlob = await imageResponse.blob();
    const payload  = new FormData();
    payload.append("type", dogStatus);
    payload.append("img", imageBlob);

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
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Select
              value={dogStatus}
              onChange={(e) => setDogStatus(e.target.value)}
              style={{ width: '100px' }}
          >
            <MenuItem value={DogStatus.LOST}>{AppTexts.searchPage.lost}</MenuItem>
            <MenuItem value={DogStatus.FOUND}>{AppTexts.searchPage.found}</MenuItem>
          </Select>
          <InputLabel>{AppTexts.searchPage.dogStatus}</InputLabel>
        </Box>
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
