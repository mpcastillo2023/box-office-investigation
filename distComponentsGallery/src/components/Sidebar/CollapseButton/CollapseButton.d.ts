import React from "react";
type customStyleClasses = {
    collapsedButton?: string;
    uncollapsedButton?: string;
};
type Props = {
    /**
     * Icon to be displayed on desktop view when uncollapsed.
     * @param {React.ReactNode}
     */
    desktopIcon: React.ReactNode;
    /**
     * Icon to be displayed on desktop view when collapsed. If not provided, `desktopIcon` will be used.
     * @param {React.ReactNode}
     */
    desktopIconCollapsed?: React.ReactNode;
    /**
     * Icon to be displayed on mobile view when uncollapsed.
     * @param {React.ReactNode}
     */
    mobileIcon: React.ReactNode;
    /**
     * Icon to be displayed on mobile view when collapsed. If not provided, `mobileIcon` will be used.
     * @param {React.ReactNode}
     */
    mobileIconCollapsed?: React.ReactNode;
    /**
     * Custom styling classes for the collapse button in both states.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
};
/**
 * CollapseButton component provides a button that can be used to toggle between collapsed and uncollapsed states.
 * It supports different icons for desktop and mobile views, and for both collapsed and uncollapsed states.
 * Custom styling classes can be applied to the button in both states.
 *
 * @param {Props} props - Props for the CollapseButton component.
 * @returns {JSX.Element}
 */
export default function CollapseButton(props: Props): React.JSX.Element;
export {};
