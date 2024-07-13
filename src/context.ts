import { createContext } from "react";

export type ContextType = {
  darkTheme?: boolean;
  setDarkTheme?: (enabled: boolean) => void;
};

export const Context = createContext<ContextType>({});