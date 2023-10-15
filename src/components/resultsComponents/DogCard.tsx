import { Card, CardActions, CardMedia, Link } from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { Dog } from "./ResultsGrid";

export const DogCard = ({ dog }: { dog: Dog }) => {
  return (
    <Card dir="rtl">
      <CardMedia
        image={dog.image}
        component="img"
        style={{ objectFit: "contain" }}
        title="Dog Image"
        sx={{ height: 400 }}
      />
      <CardActions>
        <Link underline="none" href={`tel:${dog.phone}`}>
          {AppTexts.resultsPage.call}
        </Link>
      </CardActions>
    </Card>
  );
};
