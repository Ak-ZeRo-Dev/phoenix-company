"use client";
import { ThemeProvider } from "next-themes";
//TODO Change Any
export default function Provider({ children }: any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
