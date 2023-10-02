"use client";
import { Header } from "@/ui";
import {
  FileTextIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";
import * as styles from "./common-header.css";

const HeaderLink: FC<{
  href: string;
  icon?: ReactNode;
  text: string;
}> = ({ href, icon, text }) => (
  <Link
    className={styles.linkStyle}
    href={href}
    style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit",
    }}
  >
    {icon}
    <span
      style={{
        fontSize: "0.75rem",
        fontWeight: "bold",
      }}
    >
      {text}
    </span>
  </Link>
);

export const CommonHeader = () => {
  return (
    <Header
      leftChildren={
        <Link
          href={"/debug"}
          style={{ height: "100%", textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.0rem",
              flexDirection: "row",
              paddingLeft: "1rem",
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
      rightChildren={
        <>
          <div
            className={styles.hiddenInMobileStyle}
            style={{
              alignItems: "center",
              gap: "0.875rem",
            }}
          >
            {/* Members Link */}
            <HeaderLink
              href="#"
              icon={<PersonIcon width="1.5rem" height="1.5rem" />}
              text="Members"
            />

            {/* Publications Link */}
            <HeaderLink
              href="#"
              icon={<FileTextIcon width="1.5rem" height="1.5rem" />}
              text="Publications"
            />

            {/* GitHub Repository Link */}
            <HeaderLink
              href="https://github.com/IML-okuda/official"
              icon={<GitHubLogoIcon width="1.5rem" height="1.5rem" />}
              text="GitHub"
            />
          </div>

          <div className={styles.showInMobileStyle}>
            <HamburgerMenuIcon width="1.5rem" height="1.5rem" />
          </div>
        </>
      }
      style={{
        zIndex: 10,
      }}
    />
  );
};
