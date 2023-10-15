import { Box, Button, Typography, useTheme } from "@mui/material";
import { PageContainer } from "../../components/pageComponents/PageContainer/PageContainer";
import { AppTexts } from "../../consts/texts";
import { PageTitle } from "../../components/pageComponents/PageTitle/PageTitle";
import { useImageSelection } from "../../hooks/useImageSelection";
import { DogPhoto } from "../../components/reportComponents/DogPhoto/DogPhoto";
import { RTLTextField } from "../../components/pageComponents/RTLTextInput/RTLTextField";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useTextInput } from "../../hooks/useTextInput";
import { createStyleHook } from "../../hooks/styleHooks";
import { IconSend } from "@tabler/icons-react";
import { useCallback, useMemo, useState } from "react";

const useReportDogPageStyles = createStyleHook((theme, props: { isError: boolean }) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      heigt: "100%",
      width: "100%",
    },
    button: {
      marginTop: "24px",
      marginBottom: "24px",
    },
    error: {
      opacity: props.isError ? "100%" : "0%",
    },
  };
});

export const ReportDogPage = withAuthenticationRequired(() => {
  const { onSelectImage, selectedImageUrl, clearSelection } = useImageSelection();
  const [isMissingImage, setIsMissingImage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const theme = useTheme();
  const styles = useReportDogPageStyles({ isError: showErrorMessage });

  const inputs = {
    dogRace: useTextInput({ isMandatoryInput: true }),
    dogSize: useTextInput({ isMandatoryInput: true }),
    dogColor: useTextInput({ isMandatoryInput: true }),
    chipNumber: useTextInput({ isMandatoryInput: false }),
    location: useTextInput({ isMandatoryInput: true }),
    contact: useTextInput({ isMandatoryInput: true }),
    extraDetails: useTextInput({ isMandatoryInput: false }),
  };

  const handleSubmitForm = () => {
    // Validate image upload
    const isMissingImage = !selectedImageUrl;
    setIsMissingImage(isMissingImage);

    // Validate all mandatory fields were filled
    const inputValidation = Object.values(inputs).map((input) => input.validateText());
    const hasInvalidInputs = inputValidation.some((res) => !res);

    const showError = hasInvalidInputs || isMissingImage;
    setShowErrorMessage(showError);

    if (showError) {
      return;
    }

    alert("success!");
  };

  return (
    <PageContainer>
      <Box sx={styles.root}>
        <PageTitle text={AppTexts.reportPage.title} />
        <DogPhoto
          onSelectImage={onSelectImage}
          selectedImageUrl={selectedImageUrl}
          clearSelection={clearSelection}
          isError={isMissingImage}
        />
        <RTLTextField
          label={AppTexts.reportPage.dogDetails.dogRace}
          type="text"
          fullWidth
          margin="normal"
          value={inputs.dogRace.text}
          onChange={inputs.dogRace.onTextChange}
          error={!inputs.dogRace.isTextValid}
        />
        <RTLTextField
          label={AppTexts.reportPage.dogDetails.dogSize}
          type="text"
          fullWidth
          margin="normal"
          value={inputs.dogSize.text}
          onChange={inputs.dogSize.onTextChange}
          error={!inputs.dogSize.isTextValid}
        />
        <RTLTextField
          label={AppTexts.reportPage.dogDetails.dogColor}
          type="text"
          fullWidth
          margin="normal"
          value={inputs.dogColor.text}
          onChange={inputs.dogColor.onTextChange}
          error={!inputs.dogColor.isTextValid}
        />
        <RTLTextField
          label={AppTexts.reportPage.dogDetails.chipNumber}
          type="number"
          fullWidth
          margin="normal"
          value={inputs.chipNumber.text}
          onChange={inputs.chipNumber.onTextChange}
          error={!inputs.chipNumber.isTextValid}
        />
        <RTLTextField
          label={AppTexts.reportPage.locationDetails.locationDescription}
          fullWidth
          type="text"
          margin="normal"
          value={inputs.location.text}
          onChange={inputs.location.onTextChange}
          error={!inputs.location.isTextValid}
        />
        <RTLTextField
          rows={5}
          label={AppTexts.reportPage.extraDetails.extraDetails}
          fullWidth
          multiline
          type="text"
          margin={"normal"}
          value={inputs.extraDetails.text}
          onChange={inputs.extraDetails.onTextChange}
          error={!inputs.extraDetails.isTextValid}
        />
        <RTLTextField
          rows={2}
          label={AppTexts.reportPage.extraDetails.contactDetails}
          fullWidth
          multiline
          type="text"
          margin={"normal"}
          value={inputs.contact.text}
          onChange={inputs.contact.onTextChange}
          error={!inputs.contact.isTextValid}
        />

        <Typography variant="subtitle1" color={theme.palette.error.main} sx={styles.error}>
          {AppTexts.reportPage.error}
        </Typography>
        <Button variant="contained" color="primary" sx={styles.button} onClick={handleSubmitForm}>
          <IconSend style={{ marginRight: "8px" }} />
          {AppTexts.reportPage.cta}
        </Button>
      </Box>
    </PageContainer>
  );
});
