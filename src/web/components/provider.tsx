import { Metadata } from "./metadata";
import { ThemeProvider } from "../lib/theme";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      <Metadata />
      {children}
    </ThemeProvider>
  );
}
