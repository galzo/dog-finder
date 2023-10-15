import { Grid } from "@mui/material";
import { DogCard } from "./DogCard";

export type Dog = {
  id: string;
  phone: string;
  image: string;
};

export const ResultsGrid = ({ results }: { results: Dog[] | undefined }) => {
  return (
    <Grid container spacing={2}>
      {results?.map((dog) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={dog.id}>
            <DogCard dog={dog} />
          </Grid>
        );
      })}
    </Grid>
  );
};
