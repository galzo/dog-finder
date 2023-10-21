import React from "react";
import { Alert, Button, Typography } from "@mui/material";
import { KeyedMutator } from "swr";
import { AppTexts } from "../../consts/texts";
import { Dog } from "./ResultsGrid";

export const ErrorLoadingDogs = ({
    refresh,
}: {
    refresh: KeyedMutator<Dog[]>;
}) => {
    return (
        <Alert
            dir="rtl"
            variant="filled"
            severity="error"
            action={
                <Button
                    color="inherit"
                    size="small"
                    onClick={() => refresh(undefined)}
                >
                    {AppTexts.resultsPage.refresh}
                </Button>
            }
        >
            <Typography px={6}>{AppTexts.resultsPage.error}</Typography>
        </Alert>
    );
};
