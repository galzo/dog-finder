import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../consts/routes";
import { AppTexts } from "../../consts/texts";
import { createStyleHook } from "../../hooks/styleHooks";
import { DogType } from "../../facades/payload.types";

const useNoResultsStyles = createStyleHook((theme) => {
    return {
        button: {
            width: "200px",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
        },
    };
});

interface NoDogsProps {
    dogType: DogType;
}

export const NoDogs = (props: NoDogsProps) => {
    const theme = useTheme();
    const styles = useNoResultsStyles();
    const navigate = useNavigate();
    const { dogType } = props;

    const getButtonText = () => {
        if (dogType === DogType.FOUND) {
            return AppTexts.resultsPage.noResults.reportDogFound;
        }

        return AppTexts.resultsPage.noResults.reportMissingDog;
    };

    // TODO: this code is duplicated. Clean this up
    const getButtonNavigationRoute = () => {
        if (dogType === DogType.FOUND) {
            return AppRoutes.dogs.reportFound;
        }

        return AppRoutes.dogs.reportLost;
    };

    return (
        <Box sx={styles.content}>
            <Box>
                <Typography variant="h5" color={theme.palette.text.primary}>
                    {AppTexts.resultsPage.noResults.title}
                </Typography>
            </Box>
            <Button
                size="large"
                variant="contained"
                sx={styles.button}
                onClick={() => navigate(getButtonNavigationRoute())}
            >
                {getButtonText()}
            </Button>
        </Box>
    );
};
