import React, { createContext, PropsWithChildren, useState } from "react";

interface ThemeContextData {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<Partial<ThemeContextData>>({});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<string>("");

  const value: ThemeContextData = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
