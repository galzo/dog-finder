import { Box, Divider, Typography, useTheme } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { AppTexts } from "../../consts/texts";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { createStyleHook } from "../../hooks/styleHooks";
import { UploadImage } from "../../components/reportComponents/UploadImage";
import { PageDivider } from "../../components/pageComponents/PageDivider/PageDivider";
import { PageSection } from "../../components/pageComponents/PageSection/PageSection";
import { ReportLocation } from "../../components/reportComponents/ReportLocation";
import { DogDetails } from "../../components/reportComponents/DogDetails";

const useReportPageStyles = createStyleHook((theme) => {
  return {
    section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
    },
    sectionTitle: {
      color: theme.palette.text.primary,
      marginBottom: "16px",
    },
  };
});

export const ReportDogPage = () => {
  const theme = useTheme();
  const styles = useReportPageStyles();
  return (
    <PageContainer>
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
    </PageContainer>
  );
};
