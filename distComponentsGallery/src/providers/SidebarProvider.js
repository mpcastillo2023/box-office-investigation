import React, { useState, createContext, useContext, useEffect } from "react";
import { IsDesktopContext } from "./IsDesktopProvider";
export const SidebarContext = createContext({});
export const SidebarContextProvider = ({ children }) => {
    const isDesktop = useContext(IsDesktopContext);
    const [collapsed, setCollapsed] = useState(!isDesktop);
    useEffect(() => {
        setCollapsed(!isDesktop);
    }, [isDesktop]);
    return (React.createElement(SidebarContext.Provider, { value: {
            collapsed,
            setCollapsed
        } }, children));
};
