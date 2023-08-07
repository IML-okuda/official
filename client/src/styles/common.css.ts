import { grayDarkA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const layout = style({
  "@media": {
    // Mobile
    "screen and (max-width: 767px)": {
      padding: "0 1rem",
      background: grayDarkA.grayA4,
    },
    // Desktop
    "screen and (min-width: 768px)": {
      width: "768px",
      margin: "0 auto",
      padding: "0 1rem",
      background: grayDarkA.grayA6,
    },
  },
});
