import { type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
