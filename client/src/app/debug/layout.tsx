import { CommonHeader } from "../_component";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CommonHeader />
      {children}
    </>
  );
}
