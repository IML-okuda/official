import { Header } from "@/ui";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
export const CommonHeader = () => {
  return (
    <Header
      leftChildren={
        <Link href={"/debug"} style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                padding: "0.5rem",
              }}
            >
              <Image src="/logo.svg" width={50} height={50} alt="logo" />
            </div>
            <div>
              <span
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
            </div>
          </div>
        </Link>
      }
      rightChildren={
        <div style={{ paddingRight: "1rem" }}>
          <HamburgerMenuIcon width={25} height={25} />
        </div>
      }
      style={{
        zIndex: 10,
      }}
    />
  );
};
