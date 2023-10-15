import { Box, Button } from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";
import { useImageSelection } from "../../hooks/useImageSelection";
import { IconSearch } from "@tabler/icons-react";
import { useGetServerApi } from "../../facades/ServerApi";
import { DogStatus } from "../../facades/payload.types";

export const SearchDogPage = () => {
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } = useImageSelection();
  // const [isLoading, seIsLoading] = useState<boolean>(false);
  // const [isReady, setIsReady] = useState<boolean>(false);
  

  const getServerApi = useGetServerApi();
  

  const onClickSearch = async () => {

    const serverApi = await getServerApi()
    const payload = {
      type: DogStatus.LOST, // TODO: remove
      img: selectedImageUrl
    }
    const response = (await serverApi.query(payload)).json()
  };

  return (
    <PageContainer>
      <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"24px"}>
        <PageTitle text={AppTexts.searchPage.title} />
        <DogPhoto onSelectImage={onSelectImage} selectedImageUrl={selectedImageUrl} clearSelection={clearSelection} />
        <Button size="large" variant="contained" onClick={onClickSearch}>
          <IconSearch style={{ marginRight: "8px" }} stroke={1.5}/>
          {AppTexts.searchPage.submit}
        </Button>
      </Box>
    </PageContainer>
  );
};