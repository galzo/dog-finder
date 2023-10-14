import { Box } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { AppTexts } from "../../consts/texts";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { UploadPhoto } from "../../components/reportComponents/DogPhoto/UploadPhoto";
import { PageSection } from "../../components/pageComponents/PageSection/PageSection";
import { ReportLocation } from "../../components/reportComponents/ReportLocation";
import { DogDetails } from "../../components/reportComponents/DogDetails";
import { OwnerDetails } from "../../components/reportComponents/OwnerDetails";
import { useImageSelection } from "../../hooks/useImageSelection";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";

export const ReportDogPage = () => {
  const { onSelectImage, selectedImageFile, selectedImageUrl, clearSelection } = useImageSelection();

  return (
    <PageContainer>
      <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PageTitle text={AppTexts.reportPage.title} />
        <PageSection title={AppTexts.reportPage.sections.photo.title} hasDivider={false}>
          <DogPhoto onSelectImage={onSelectImage} selectedImageUrl={selectedImageUrl} clearSelection={clearSelection} />
        </PageSection>
        <PageSection title={AppTexts.reportPage.sections.dogDetails.title} hasDivider={true}>
          <DogDetails />
        </PageSection>
        <PageSection title={"פרטים על בעלי הכלב"} hasDivider={true}>
          <OwnerDetails />
        </PageSection>
        <PageSection title={AppTexts.reportPage.sections.location.title} hasDivider={true}>
          <ReportLocation />
        </PageSection>
      </Box>
    </PageContainer>
  );
};
