import { createTheme } from "@mui/material";
import { AppColors } from "../consts/colors";

const {
  palette: { augmentColor },
} = createTheme();

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const createBackgroundColor = (color: string) => ({ default: color, paper: color });

export const theme = createTheme({
  palette: {
    primary: createColor(AppColors.primary),
    secondary: createColor(AppColors.secondary),
    background: createBackgroundColor(AppColors.background),
    divider: AppColors.divider,
  },
});
