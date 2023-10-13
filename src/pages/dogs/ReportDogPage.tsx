import { Box } from "@mui/material";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { AppTexts } from "../../consts/texts";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const ReportDogPage = () => {
  return (
    <PageContainer>
      <PageTitle text={AppTexts.reportPage.title} />
    </PageContainer>
  );
};
