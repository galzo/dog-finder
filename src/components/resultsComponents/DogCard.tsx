import { Card, CardActions, CardMedia, Link } from "@mui/material";
import { AppTexts } from "../../consts/texts";
import { Dog } from "./ResultsGrid";

export const DogCard = ({ dog }: { dog: Dog }) => {
  const image = dog.image;
  const blob = new Blob([image], { type: "image/*" });
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(blob);
  return (
    <Card dir="rtl">
      <CardMedia
        image={imageUrl}
        component="img"
        style={{ objectFit: "contain" }}
        title="Dog Image"
        sx={{ height: 400 }}
      />
      <CardActions>
        <Link underline="none" href={`tel:${dog.contactPhone}`}>
          {AppTexts.resultsPage.call}
        </Link>
      </CardActions>
    </Card>
  );
};
