import React, { useState, createContext, useEffect } from "react";
import { themeItem } from "../const/localStorageItems";
const getDefaultTheme = () => {
    const storedTheme = localStorage.getItem(themeItem);
    if (storedTheme) {
        try {
            const theme = JSON.parse(storedTheme);
            return theme;
        }
        catch {
            return "light";
        }
    }
    return "light";
};
const defaultTheme = getDefaultTheme();
export const ThemeContext = createContext(defaultTheme);
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);
    const setThemeHandler = (theme) => {
        localStorage.setItem(themeItem, JSON.stringify(theme));
        setTheme(theme);
        setBodyClass(theme);
    };
    useEffect(() => {
        setBodyClass(defaultTheme);
    }, []);
    const setBodyClass = (theme) => {
        if (theme === "dark") {
            document.querySelector("body")?.classList.add("theme-dark");
        }
        else {
            document.querySelector("body")?.classList.remove("theme-dark");
        }
    };
    return (React.createElement(ThemeContext.Provider, { value: {
            theme,
            setTheme: setThemeHandler
        } }, children));
};
