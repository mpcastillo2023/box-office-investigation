import React from "react";
type SidebarContextValue = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const SidebarContext: React.Context<SidebarContextValue>;
type Props = {
    children: React.ReactNode;
};
export declare const SidebarContextProvider: ({ children }: Props) => React.JSX.Element;
export {};
