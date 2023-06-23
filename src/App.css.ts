import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const app = style({
  color: vars.colors.secondary,
  background: vars.colors.primary,
  fontFamily: vars.fontFamily,
  fontSize: "12px",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "16px",
    },
  },
});

export const title = style({
  textAlign: "center",
});

export const frontCover = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  margin: 0,
  padding: 0,
});

export const frontCoverText = style({
  maxWidth: "768px",
  fontSize: "4em",
});

export const frontCoverSubtext = style({
  width: "768px",
  fontSize: "2em",
});

export const breakRow = style({
  flexBasis: "100%",
  height: 0,
});

export const spacer = style({
  flexBasis: "100%",
  height: "50px",
});
