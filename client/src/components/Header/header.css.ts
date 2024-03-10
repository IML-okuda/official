import { blackA } from "@radix-ui/colors";
import { style, styleVariants } from "@vanilla-extract/css";

// scroll で背景色を変えたい（固定）
const baseStyle = style({
  zIndex: 100,
  padding: "0.5rem 0",
  width: "100%",
  opacity: 0.985,
  backdropFilter: "blur(1.5rem)",
  overscrollBehaviorY: "contain",
});

export const headerStyle = styleVariants({
  default: [
    baseStyle,
    {
      position: "fixed",
      top: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  ],
  full: [
    baseStyle,
    {
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      overflow: "hidden",
    },
  ],
});

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

export const hamburgerStyle = style({
  border: "none",
  borderRadius: "1.5rem",
  padding: "0.5rem",
  fontSize: "1.25rem",
  background: "none",
  cursor: "pointer",
  display: "flex",
  "@media": {
    "(any-hover: hover)": {
      ":hover": {
        backgroundColor: blackA.blackA2,
      },
    },
  },
});

export const navStyle = style({
  width: "100%",
});
