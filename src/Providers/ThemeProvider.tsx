import React, { useState, createContext, useEffect } from "react";

type Theme = "old" | "new";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const getDefaultTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    try {
      const theme = JSON.parse(storedTheme);
      return theme;
    } catch {
      return "old";
    }
  }
  return "old";
};

const defaultTheme = getDefaultTheme();

export const ThemeContext = createContext<ThemeContextValue>(defaultTheme as ThemeContextValue);

type Props = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const setThemeHandler = (theme: Theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    setTheme(theme);
    setBodyClass(theme);
  };

  useEffect(() => {
    setBodyClass(defaultTheme);
  }, []);

  const setBodyClass = (theme: string) => {
    if (theme === "new") {
      document.querySelector("body")?.classList.add("theme-new");
    } else {
      document.querySelector("body")?.classList.remove("theme-new");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
