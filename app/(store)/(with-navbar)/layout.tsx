import { Navbar } from "components/layout/navbar";
import { ReactNode } from "react";

export default function StoreWithNavbarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
