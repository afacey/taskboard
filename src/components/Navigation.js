import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';

const Navigation = () => {
  const theme = useContext(ThemeContext);

  return (
    <h1 className={theme}>Navigation</h1>
  )
}

export default Navigation;