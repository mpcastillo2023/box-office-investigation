import React from "react";
type customStyleClasses = {
    sidebarContent?: string;
    sidebarContainer?: string;
    sidebarHeader?: string;
};
type Props = {
    /**
     * React nodes to be rendered inside the sidebar.
     * @param {React.ReactNode}
     */
    children: React.ReactNode;
    /**
     * Custom styling classes for the sidebar's content and container.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * Boolean to enable or disable draggable resizing of the sidebar.
     * @param {boolean}
     */
    draggable?: boolean;
    /**
     * Minimum width the sidebar can be resized to (in pixels).
     * @param {number}
     */
    minWidth?: number;
    /**
     * Boolean to render collapse buttons inside the sidebar.
     * @param {boolean}
     */
    collapseButtonsInside?: boolean;
    /**
     * React nodes to render a sidebar header.
     * @type {React.ReactNode}
     */
    customHeader?: React.ReactNode;
    /**
     * Icon to toggle the sidebar.
     * @type {React.ReactNode}
     */
    toggleIcon?: React.ReactNode;
    /**
     * Text to defined a tooltip information used on hover icon
     * @type {React.ReactNode}
     */
    tooltipIconText?: React.ReactNode;
    /**
     * Whether the sidebar is open or closed
     * @type {boolean}
     */
    toggleSidebar?: boolean;
    /**
     * Custom function to toggle sidebar
     * @type {(toggle: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>}
     */
    onToggleSidebar?: (toggle: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>;
};
/**
 * SidebarContent component provides a sidebar that can contain various child components.
 * It supports custom styling, collapsible functionality, and optional dragging to resize.
 * The component also adapts its appearance and behavior based on desktop or other views,
 * taking into consideration the minimum width and the inclusion of collapse buttons inside the sidebar.
 *
 * @param {Props} props - Props for the SidebarContent component.
 * @returns {JSX.Element}
 */
export default function SidebarContent({ children, customStyle, draggable, minWidth, collapseButtonsInside, customHeader, toggleIcon, toggleSidebar, onToggleSidebar, tooltipIconText }: Props): React.JSX.Element;
export {};
