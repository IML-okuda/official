"use client";
import { Header } from "@/ui";
import {
  FileTextIcon,
  GitHubLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./common-header.css";

export const CommonHeader = () => {
  return (
    <Header
      top={
        <Link
          href={"/"}
          style={{ height: "100%", textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.0rem",
              flexDirection: "row",
            }}
          >
            {/* Logo */}
            <div
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Image src="/logo.svg" width={45} height={45} alt="logo" />
            </div>
            {/* Text */}
            <div>
              <span
                className={styles.hiddenInMobileStyle}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#050505",
                }}
              >
                Intelligent Mechanism Laboratory
                <br />
                Masahiro Okuda
              </span>
              <span
                className={styles.showInMobileStyle}
                style={{
                  fontSize: "1.0rem",
                  fontWeight: "bold",
                  color: "#050505",
                  gap: "0.75rem",
                }}
              >
                <span>知的機構研究室</span>
                <span>奥田正浩</span>
              </span>
            </div>
          </div>
        </Link>
      }
      menu={[
        {
          href: "/",
          icon: <PersonIcon width="1em" height="1em" />,
          text: "Members",
        },
        {
          href: "/",
          icon: <FileTextIcon width="1em" height="1em" />,
          text: "Publications",
        },
        {
          href: "https://github.com/IML-okuda/official",
          icon: <GitHubLogoIcon width="1em" height="1em" />,
          text: "GitHub",
        },
      ]}
    />
  );
};
