import { Box } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { AppTexts } from "../../consts/texts";
import { ResultsGrid } from "../../components/resultsComponents/ResultsGrid";

const results = [
  { id: "1230", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1231", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1232", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1233", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1234", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1235", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1236", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1237", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
];

export const ResultsDogPage = () => {
  return (
    <PageContainer>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        px={4}
      >
        <PageTitle text={AppTexts.resultsPage.title} />
        <ResultsGrid results={results} />
      </Box>
    </PageContainer>
  );
};
