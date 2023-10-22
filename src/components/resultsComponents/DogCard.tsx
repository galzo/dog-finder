import { Card, CardActions, CardMedia, Link } from "@mui/material";
import { IconPhone, IconMail, IconUser } from "@tabler/icons-react";
import { Dog } from "../../types/Dog";
import { AppTexts } from "../../consts/texts";

const linkStyle = { display: "flex", alignItems: "center", gap: "8px" };

export const DogCard = ({ dog }: { dog: Dog }) => {
  const image = `data:${dog.imageContentType};base64,${dog.image}`;
  return (
    <Card dir="rtl">
      <CardMedia
        image={image}
        component="img"
        style={{ objectFit: "contain" }}
        title="Dog Image"
        sx={{ height: 400 }}
      />
      <CardActions
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <Link // eslint-disable-line
          underline="none"
          href="#"
          style={{
            ...linkStyle,
            cursor: "default",
            pointerEvents: "none",
          }}
        >
          <IconUser />
          {dog.contactName}
        </Link>
      </CardActions>
      <CardActions
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <Link
          underline="none"
          href={`tel:${dog.contactPhone}`}
          style={linkStyle}
        >
          <IconPhone /> {AppTexts.resultsPage.call}
        </Link>

        <Link
          underline="none"
          href={`mailto:${dog.contactEmail}`}
          style={linkStyle}
        >
          <IconMail />
          {AppTexts.resultsPage.email}
        </Link>
      </CardActions>
    </Card>
  );
};
