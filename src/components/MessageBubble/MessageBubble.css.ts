import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const left = style({
  width: "100%",
  textAlign: "left",
});

export const right = style({
  float: "right",
});

export const msgInner = style({
  width: "40%",
  border: "1px solid",
  borderColor: vars.colors.accent,
  margin: "15px",
  padding: "15px",
  borderRadius: "15px",
  fontWeight: "bold",
});
