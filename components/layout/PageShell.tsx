import { type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
