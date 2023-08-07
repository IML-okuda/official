import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("html, body", {
  margin: 0,
  color: "#222",
  background:
    "linear-gradient(to bottom, transparent, rgb(255, 255, 255)) rgb(220, 220, 224)",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const layout = style({
  "@media": {
    // Mobile
    "screen and (max-width: 700px)": {
      padding: "0 1rem",
      opacity: 0.9,
    },
    // Desktop
    "screen and (min-width: 701px)": {
      width: "701px",
      margin: "0 auto",
      padding: "0 1rem",
    },
  },
});
