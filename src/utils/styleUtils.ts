import { SxProps, Theme } from "@mui/material";

export default function combineStyles(...styles: Array<SxProps<Theme>>) {
  return styles.reduce((res, curr) => {
    return { ...res, ...curr };
  }, {});
}
