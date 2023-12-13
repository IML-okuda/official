import { blackA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const linkStyle = style({
  textDecoration: "none",
  color: "inherit",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  "@media": {
    "(any-hover: hover)": {
      ":hover": {
        textDecoration: "underline",
        backgroundColor: blackA.blackA2,
      },
    },
  },
});

export const hiddenInMobileStyle = style({
  display: "flex",
  "@media": {
    "(max-width: 700px)": {
      display: "none",
    },
  },
});

export const showInMobileStyle = style({
  display: "flex",
  "@media": {
    "(min-width: 701px)": {
      display: "none",
    },
  },
});
