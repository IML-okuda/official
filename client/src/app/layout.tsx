import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
