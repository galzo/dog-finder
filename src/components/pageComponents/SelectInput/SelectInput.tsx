import { TextField, SelectProps, alpha, Box, Select, MenuItem } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { createStyleHook } from "../../../hooks/styleHooks";
import { AppTexts } from "../../../consts/texts";
import { DogType } from "../../../facades/payload.types";

const RTLWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div dir="rtl">{children}</div>;
};

const useSelectInputStyles = createStyleHook((theme) => {
  return {
    root: {
        width: "500px",
        borderColor: alpha(theme.palette.primary.main, 0.6),
        marginTop: "24px",
        marginBottom: "8px",
        color: "#FFFFFF",
        "& label": {
          left: "unset",
          right: "1.75rem",
          transformOrigin: "right",
          fontSize: "0.8rem",
        },
        "& legend": {
          textAlign: "right",
          fontSize: "0.6rem",
          color: "#FFFFFF"
        },
        "& .MuiSelect-outlined": {
          borderColor: alpha(theme.palette.primary.main, 0.6),
        },
        "@media (max-width: 500px)": {
          width: "375px",
        },
        "@media (max-width: 400px)": {
          width: "300px",
        },
      }
  };
});

export const SelectInputField: FC<SelectProps> = (props) => {
  const styles = useSelectInputStyles();
  return (
    <RTLWrapper>
        <Box>
            <Select {...props} sx={styles.root}>
                <MenuItem value={DogType.LOST}>{AppTexts.reportPage.dogType.lost}</MenuItem>
                <MenuItem value={DogType.FOUND}>{AppTexts.reportPage.dogType.found}</MenuItem>
            </Select>
        </Box>
    </RTLWrapper>
  );
};
