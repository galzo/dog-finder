import { Box, Button, CircularProgress } from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";
import { useImageSelection } from "../../hooks/useImageSelection";
import { IconSearch } from "@tabler/icons-react";
import { useGetServerApi } from "../../facades/ServerApi";
import { DogStatus } from "../../facades/payload.types";
import { useState } from "react";

export const SearchDogPage = () => {
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } = useImageSelection();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean|undefined>(undefined);
  

  const getServerApi = useGetServerApi();
  

  const onClickSearch = async () => {
    setIsLoading(true);
    const serverApi = await getServerApi()

    if (!selectedImageUrl) {
      return 
    }
    const payload = {
      type: DogStatus.LOST, // TODO: remove
      img: selectedImageUrl
    }
    const response = (await serverApi.query(payload))

    if (response.status === 200) {
      setIsSuccess(true)
    } else {
      setIsSuccess(false)
    }
    
  };

  return (
    <PageContainer>
      <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"24px"}>
        <PageTitle text={AppTexts.searchPage.title} />
        <DogPhoto onSelectImage={onSelectImage} selectedImageUrl={selectedImageUrl} clearSelection={clearSelection} />
        <Button size="large" variant="contained" onClick={onClickSearch} disabled={!!selectedImageUrl}>
          { 
            isLoading ? <CircularProgress /> : (
              <>
              <IconSearch style={{ marginRight: "8px" }} stroke={1.5}/>
              {AppTexts.searchPage.submit}
              </>
              
            )
          }
          
        </Button>
      </Box>
    </PageContainer>
  );
};