import { ReactNode } from "react";

export const metadata = {
  description: "Palace landing page.",
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div
      aria-label="layout"
      className="flex sm:min-h-dvh  min-h-0 flex-col bg-white text-black"
    >
      {children}
    </div>
  );
}
