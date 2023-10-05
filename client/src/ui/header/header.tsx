"use client";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Portal from "@radix-ui/react-portal";
import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { HeaderLink } from "./header-link";
import * as styles from "./header.css";

type Menu = {
  href: string;
  icon?: ReactNode;
  text: string;
};

type Props = Omit<ComponentPropsWithoutRef<"header">, "className" | "style"> & {
  top?: ReactNode;
  menu?: Menu[];
  fullscreen?: boolean;
};

const _Header: FC<Props> = ({ children, top, menu, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 700);
      if (window.innerHeight >= 700) {
        setIsOpen(false);
      }
    });
  }, []);

  const Nav = () => (
    <div style={{ width: "100%" }}>
      <nav className={styles.navStyle}>
        <div
          style={{
            display: isMobile ? undefined : "flex",
            flexDirection: isMobile ? undefined : "row",
            justifyContent: isMobile ? undefined : "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            {top}
            {isMobile && (
              <button
                className={styles.hamburgerStyle}
                onClick={() => setIsOpen((v) => !v)}
              >
                {isOpen ? (
                  <Cross1Icon width="1em" height="1em" />
                ) : (
                  <HamburgerMenuIcon width="1em" height="1em" />
                )}
              </button>
            )}
          </div>
          {isMobile && isOpen && (
            <>
              <div style={{ margin: "3rem" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                {menu?.map((m) => <HeaderLink large key={m.href} {...m} />)}
              </div>
            </>
          )}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                paddingRight: "1rem",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {menu?.map((m) => <HeaderLink key={m.href} {...m} />)}
            </div>
          )}
        </div>
      </nav>
    </div>
  );

  if (isMobile && isOpen) {
    return (
      <Portal.Root container={document.body}>
        <header
          className={styles.headerStyle["full"]}
          style={{
            position: "fixed",
            bottom: "0",
            top: "0",
            display: "flex",
            flexDirection: "column",
          }}
          {...props}
        >
          <div style={{ width: "100%" }}>
            <Nav />
          </div>
        </header>
      </Portal.Root>
    );
  }
  return (
    <header className={styles.headerStyle["default"]} {...props}>
      <div style={{ width: "100%" }}>
        <Nav />
      </div>
    </header>
  );
};

export const Header = _Header;
