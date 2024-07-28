import React, { createContext, ReactNode } from "react";
import { theme } from "../theme/default.theme";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
