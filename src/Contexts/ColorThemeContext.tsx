import React, { createContext, useContext, useEffect, useState } from "react";

const ColorThemeContext = createContext<any>(null);

export const ColorThemeProvider = ({ children }: { children: any }) => {
  const [colorTheme, setColorTheme] = useState("light");

  const toggleColorTheme = () => {
    const newTheme = colorTheme === "light" ? "dark" : "light";
    setColorTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("esri-app-color-theme", newTheme);

  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("esri-app-color-theme");
    if (storedTheme) {
      setColorTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  return useContext(ColorThemeContext);
};

export default { ColorThemeProvider, useColorTheme };
