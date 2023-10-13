import { Box } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { AppTexts } from "../../consts/texts";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { UploadImage } from "../../components/reportComponents/UploadImage";
import { PageSection } from "../../components/pageComponents/PageSection/PageSection";
import { ReportLocation } from "../../components/reportComponents/ReportLocation";
import { DogDetails } from "../../components/reportComponents/DogDetails";

export const ReportDogPage = () => {
  return (
    <PageContainer>
      <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PageTitle text={AppTexts.reportPage.title} />
        <PageSection title={AppTexts.reportPage.sections.upload.title} dividerSize="large">
          <UploadImage />
        </PageSection>
        <PageSection title={AppTexts.reportPage.sections.dogDetails.title} dividerSize="small">
          <DogDetails />
        </PageSection>
        <PageSection title={AppTexts.reportPage.sections.location.title} dividerSize="small">
          <ReportLocation />
        </PageSection>
      </Box>
    </PageContainer>
  );
};
