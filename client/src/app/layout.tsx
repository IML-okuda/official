import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "同志社大学 知的機構研究室（奥田研）",
  description: "同志社大学 知的機構研究室（奥田研）",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        {/* 背景画像 */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100vh",
            backgroundImage: "url(/background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat", // これを追加
            filter: "blur(25px)",
            zIndex: -1,
          }}
        />
        {/* <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        > */}
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
        {/* </div> */}
      </body>
    </html>
  );
}
