import { createTheme } from "@mui/material";
import { AppColors } from "../consts/colors";

const {
  palette: { augmentColor },
} = createTheme();

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const createBackgroundColor = (color: string, paper: string) => ({ default: color, paper: paper });
const createTextColor = (color: string) => ({
  primary: color,
  secondary: color,
  disabled: color,
});

export const theme = createTheme({
  palette: {
    primary: createColor(AppColors.primary),
    secondary: createColor(AppColors.secondary),
    background: createBackgroundColor(AppColors.background, AppColors.paper),
    divider: AppColors.divider,
    text: createTextColor(AppColors.text),
  },
});
