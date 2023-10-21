import { TextField, TextFieldProps, alpha } from "@mui/material";
import { FC, ReactNode } from "react";
import { createStyleHook } from "../../../hooks/styleHooks";

const RTLWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div dir="rtl">{children}</div>;
};

const useRTLTextFieldStyles = createStyleHook((theme) => {
  return {
    root: {
      width: "500px",
      marginBottom: "8px",
      "& label": {
        left: "unset",
        right: "1.75rem",
        transformOrigin: "right",
        fontSize: "0.8rem",
      },
      "& legend": {
        textAlign: "right",
        fontSize: "0.6rem",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: alpha(theme.palette.primary.main, 0.6),
        },
        "&:hover fieldset": {
          borderColor: alpha(theme.palette.primary.main, 0.6),
        },
      },
      "@media (max-width: 500px)": {
        width: "375px",
      },
      "@media (max-width: 400px)": {
        width: "300px",
      },
    },
  };
});

const RTLTextField: FC<TextFieldProps> = (props) => {
  const styles = useRTLTextFieldStyles();
  return (
    <RTLWrapper>
      <TextField {...props} sx={styles.root} />
    </RTLWrapper>
  );
};

export default RTLTextField;
