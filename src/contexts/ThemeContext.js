import React, { useState } from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {
  const [ theme, setTheme ] = useState("");
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