import { createContext } from 'react';
import React, { useState } from 'react';

const ThemeContext = createContext();
//const initialTheme = 'light';

const ThemeProvider = ({ children }) => {
  
  var themeInLocalStorage = localStorage.getItem("themeInfo");
  if (!themeInLocalStorage) { // si es nulo, setea en localstorage
    const res = { token: true, expiresIn: 60 };
    localStorage.setItem("themeInfo", JSON.stringify(res));
  }
  else{
    const parsedItem = JSON.parse(themeInLocalStorage);
    var storagedtTheme = parsedItem.token? 'light':'dark';
  }

  const [theme, setTheme] = useState(storagedtTheme);

  const handleTheme = (e) => {
    
    if (e.target.checked === true) {
      setTheme('light');
      const res = { token: true, expiresIn: 60 };
      localStorage.setItem("themeInfo", JSON.stringify(res));
    } else {
      setTheme('dark');
      const res = { token: false, expiresIn: 60 };
      localStorage.setItem("themeInfo", JSON.stringify(res));
    }

    //console.log(theme);
  };

  const data = {theme, handleTheme};

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;