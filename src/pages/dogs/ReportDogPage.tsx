import { Box } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { AppTexts } from "../../consts/texts";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { UploadPhoto } from "../../components/reportComponents/DogPhoto/UploadPhoto";
import { PageSection } from "../../components/pageComponents/PageSection/PageSection";
import { useImageSelection } from "../../hooks/useImageSelection";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";
import { RTLTextField } from "../../components/pageComponents/RTLTextInput/RTLTextField";
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const ReportDogPage = withAuthenticationRequired(() => {
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } = useImageSelection();


  return (
    <PageContainer>
      <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PageTitle text={AppTexts.reportPage.title} />
        <DogPhoto onSelectImage={onSelectImage} selectedImageUrl={selectedImageUrl} clearSelection={clearSelection} />
        <RTLTextField label={AppTexts.reportPage.dogDetails.dogRace} type="text" fullWidth margin="normal" />
        <RTLTextField label={AppTexts.reportPage.dogDetails.dogSize} type="text" fullWidth margin="normal" />
        <RTLTextField label={AppTexts.reportPage.dogDetails.dogColor} type="text" fullWidth margin="normal" />
        <RTLTextField label={AppTexts.reportPage.dogDetails.chipNumber} type="number" fullWidth margin="normal" />
        <RTLTextField
          label={AppTexts.reportPage.locationDetails.locationDescription}
          fullWidth
          type="text"
          margin="normal"
        />
        <RTLTextField
          rows={5}
          label={AppTexts.reportPage.extraDetails.extraDetails}
          fullWidth
          multiline
          type="text"
          margin={"normal"}
        />
        <RTLTextField
          rows={2}
          label={AppTexts.reportPage.extraDetails.contactDetails}
          fullWidth
          multiline
          type="text"
          margin={"normal"}
        />
      </Box>
    </PageContainer>
  );
});
