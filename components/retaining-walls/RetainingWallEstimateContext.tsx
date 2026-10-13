"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import type { RetainingWallEstimate } from "@/lib/retaining-wall-estimate";

type EstimateContextValue = {
  estimate: RetainingWallEstimate | null;
  setEstimate: (estimate: RetainingWallEstimate | null) => void;
};

const EstimateContext = createContext<EstimateContextValue | null>(null);

export function RetainingWallEstimateProvider({ children }: { children: ReactNode }) {
  const [estimate, setEstimate] = useState<RetainingWallEstimate | null>(null);

  return (
    <EstimateContext.Provider value={{ estimate, setEstimate }}>
      {children}
    </EstimateContext.Provider>
  );
}

export function useRetainingWallEstimate() {
  const context = useContext(EstimateContext);

  if (!context) {
    throw new Error(
      "useRetainingWallEstimate must be used inside RetainingWallEstimateProvider.",
    );
  }

  return context;
}

export function RetainingWallBidForm() {
  const { estimate } = useRetainingWallEstimate();

  return <ContactForm retainingWall retainingWallEstimate={estimate} />;
}
