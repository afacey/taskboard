import * as React from 'react'

export const ThemeContext = React.createContext({})

const ThemeProvider: React.FunctionComponent = ({children}) => {
  const [ theme, setTheme ] = React.useState("");
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