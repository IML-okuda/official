import { Header } from "@/ui";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header leftChildren={<strong>IML Okuda</strong>} />
      {children}
    </>
  );
}
