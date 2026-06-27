import { Header } from "../header";
import * as styles from "./common-header.css";

export const CommonHeader = () => {
  return (
    <Header
      top={
        <a
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
              <img src="/logo.svg" width={45} height={45} alt="logo" />
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
        </a>
      }
      menu={[
        {
          href: "/#news",
          text: "News",
        },
        {
          href: "/#research",
          text: "研究 / Research",
        },
        {
          href: "/publication.html",
          text: "Publication",
        },
        {
          href: "/#industry",
          text: "企業の方へ",
        },
        {
          href: "https://researchmap.jp/okdms",
          text: "Research Map",
        },
      ]}
    />
  );
};
