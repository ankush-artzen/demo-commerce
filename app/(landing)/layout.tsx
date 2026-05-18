import { ReactNode } from "react";

export const metadata = {
  description: "Palace landing page.",
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {children}
    </div>
  );
}
