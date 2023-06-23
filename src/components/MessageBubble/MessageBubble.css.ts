import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const msgOuter = style({
  width: "100%",
  textAlign: "left",
});

export const msgInnerUser = style({
  width: "50%",
  margin: "15px auto 15px 0",
});

export const msgInnerBot = style({
  width: "50%",
  margin: "15px 0 15px auto",
});

export const msgInner = style({
  margin: "5px 10px 5px 10px",
  border: "1px solid",
  borderColor: vars.colors.accent,
  borderRadius: "15px",
  fontWeight: "bold",
  padding: "15px",
});
