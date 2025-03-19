import React, { useState, createContext, useEffect } from "react";
export const IsDesktopContext = createContext(true);
export const IsDesktopProvider = ({ children }) => {
    const mediaQueryDesktop = window.matchMedia("(min-width: 769px)");
    const [isDesktop, setIsDesktop] = useState(mediaQueryDesktop.matches);
    const changeMediaQueryHandler = (e) => {
        setIsDesktop(e.matches);
    };
    useEffect(() => {
        mediaQueryDesktop.addEventListener("change", changeMediaQueryHandler);
        return () => {
            mediaQueryDesktop.removeEventListener("change", changeMediaQueryHandler);
        };
    }, []);
    return (React.createElement(IsDesktopContext.Provider, { value: isDesktop }, children));
};
