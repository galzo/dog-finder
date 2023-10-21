import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DogCard } from "./DogCard";
import { DogType } from "../../facades/payload.types";
import { AppTexts } from "../../consts/texts";
import { AppRoutes } from "../../consts/routes";
import { createStyleHook } from "../../hooks/styleHooks";

export type Dog = {
  dogId: string;
  contactPhone: string;
  contactName: string;
  contactEmail: string;
  image: string;
  imageContentType: string;
};

const useResultsStyles = createStyleHook(() => {
  return {
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

export const ResultsGrid = ({
  results,
  dogType,
}: {
  results: Dog[] | undefined;
  dogType: DogType;
}) => {
  const navigate = useNavigate();
  const styles = useResultsStyles();

  const getButtonText = () => {
    if (dogType === DogType.FOUND) {
      return AppTexts.resultsPage.notFound.foundDogNotFound;
    }

    return AppTexts.resultsPage.notFound.lostDogNotFound;
  };

  const getButtonNavigationRoute = () => {
    if (dogType === DogType.FOUND) {
      return AppRoutes.dogs.reportFound;
    }

    return AppRoutes.dogs.reportLost;
  };

  return (
    <>
      <Grid container spacing={2}>
        {results?.map((dog) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={dog.dogId}>
              <DogCard dog={dog} />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={styles.buttonContainer}>
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate(getButtonNavigationRoute())}
        >
          {getButtonText()}
        </Button>
      </Box>
    </>
  );
};
