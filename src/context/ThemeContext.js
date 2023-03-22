import { createContext } from 'react';
import React, { useState } from 'react';

const ThemeContext = createContext();
const initialTheme = 'light';

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    //console.log(e.target.checked)
    // if (e.target.value === 'light') {
    //   setTheme('light');
    // } else {
    //   setTheme('dark');
    // }
    if (e.target.checked === true) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    //console.log(theme);
  };

  const data = {theme, handleTheme};

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;