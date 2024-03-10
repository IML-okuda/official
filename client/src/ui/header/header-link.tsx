import { blackA } from "@radix-ui/colors";
import type { FC, ReactNode } from "react";
import * as styles from "./header.css";

export const HeaderLink: FC<{
  large?: boolean;
  href: string;
  icon?: ReactNode;
  text: string;
}> = ({ href, icon, text, large }) => (
  <a
    className={styles.linkStyle}
    href={href}
    style={{
      display: "flex",
      gap: large ? "1rem" : "0.5rem",
      alignItems: "center",
      textDecoration: "none",
      fontSize: large ? "1.0rem" : "0.75rem",
      color: blackA.blackA10,
      padding: large ? "0.75rem 1.5rem" : undefined,
      fontWeight: "bold",
    }}
  >
    {large && icon}
    <span style={{}}>{text}</span>
  </a>
);
