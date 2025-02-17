import React from "react";
type Theme = "light" | "dark";
type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeContext: React.Context<ThemeContextValue>;
type Props = {
    children: React.ReactNode;
};
export declare const ThemeContextProvider: ({ children }: Props) => React.JSX.Element;
export {};
