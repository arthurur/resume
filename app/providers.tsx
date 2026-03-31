"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ArthurContextProvider } from "@/contexts/ArthurContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ArthurContextProvider>{children}</ArthurContextProvider>
    </ThemeProvider>
  );
}
