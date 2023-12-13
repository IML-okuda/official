import {
  FileTextIcon,
  GitHubLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
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
          href: "https://researchmap.jp/okdms",
          icon: <PersonIcon width="1em" height="1em" />,
          text: "Research Map",
        },
        {
          href: "https://scholar.google.com/citations?user=YePYNYkAAAAJ&hl=en",
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
