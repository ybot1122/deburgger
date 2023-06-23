import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const app = style({
  maxWidth: "1024px",
  margin: "auto",
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

export const chatWindow = style({
  maxWidth: "420px",
  textAlign: "center",
  border: "1px black solid",
  margin: "15px auto",
  padding: "15px",
});

export const chatMessageWindow = style({
  width: "100%",
  height: "420px",
  border: "1px gray dashed",
  background: vars.colors.emphasis,
  overflowY: "scroll",
  padding: "0",
  margin: "0",
});
