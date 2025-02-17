import React from "react";
type Props = {
    desktopIcon: React.ReactNode;
    desktopIconCollapsed?: React.ReactNode;
    mobileIcon: React.ReactNode;
    mobileIconCollapsed?: React.ReactNode;
};
export default function UseCollapseButton({ desktopIcon, desktopIconCollapsed, mobileIcon, mobileIconCollapsed }: Props): {
    onClickHandler: () => void;
    currentIcon: React.ReactNode;
    collapsed: boolean;
};
export {};
