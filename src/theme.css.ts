import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    primary: "#E7CEA6",
    secondary: "#0A6EBD",
    accent: "#5A96E3",
    emphasis: "#A1C2F1",
  },
  fontFamily: "Arial",
});
