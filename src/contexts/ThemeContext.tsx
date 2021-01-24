import * as React from 'react'

interface ThemeContextData {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<Partial<ThemeContextData>>({})

const ThemeProvider: React.FunctionComponent = ({children}) => {
  const [ theme, setTheme ] = React.useState<string>("");
  const value = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;