import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  position: "sticky",
  top: 0,
  height: "4rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  opacity: 0.8,
  backdropFilter: "blur(2.5rem)",
});
