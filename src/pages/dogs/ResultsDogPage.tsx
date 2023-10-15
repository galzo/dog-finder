import useSWR, { Fetcher } from "swr";
import { Box } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { AppTexts } from "../../consts/texts";
import { ResultsGrid } from "../../components/resultsComponents/ResultsGrid";
import type { Dog } from "../../components/resultsComponents/ResultsGrid";
import { ErrorLoadingDogs } from "../../components/resultsComponents/ErrorLoadingDogs";
import { LoadingDogs } from "../../components/resultsComponents/LoadingDogs";
import { NoDogs } from "../../components/resultsComponents/NoDogs";

// placeholder for integration
const results: Dog[] = [
  { id: "1230", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1231", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1232", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1233", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1234", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1235", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1236", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
  { id: "1237", phone: "123-456-7890", image: "https://picsum.photos/400/300" },
];

const API_PATH = "/api/dogs";
const fetcher: Fetcher<Dog[], string> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, 2000);
  });
};
// placeholder done.

export const ResultsDogPage = () => {
  const { data: results, error, isLoading, mutate } = useSWR(API_PATH, fetcher);
  const isEmpty = results?.length === 0;
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
        {isLoading && <LoadingDogs />}
        {!isLoading && isEmpty && !error && <NoDogs />}
        {!isLoading && error && <ErrorLoadingDogs refresh={mutate} />}
        {!isLoading && !error && !isEmpty && <ResultsGrid results={results} />}
      </Box>
    </PageContainer>
  );
};
