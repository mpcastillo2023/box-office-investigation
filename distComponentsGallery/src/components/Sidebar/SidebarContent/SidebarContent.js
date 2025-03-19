import React, { useContext } from "react";
import UseGetElementDimension from "../../../hooks/UseGetElementDimension";
import { IsDesktopContext } from "@cg-providers/IsDesktopProvider";
import { SidebarContext } from "@cg-providers/SidebarProvider";
import { Portal } from "../../Portal/Portal";
import styles from "../Styles/styles.module.scss";
import UseDraggable from "./Hooks/UseDraggable";
import ArrowDrag from "@cg-icons/ArrowDrag.svg";
import Tooltip from "@cg-components/Tooltip/Tooltip";
import Close from "@cg-icons/Close.svg";
import { Button } from "@cg-components/Button";
/**
 * SidebarContent component provides a sidebar that can contain various child components.
 * It supports custom styling, collapsible functionality, and optional dragging to resize.
 * The component also adapts its appearance and behavior based on desktop or other views,
 * taking into consideration the minimum width and the inclusion of collapse buttons inside the sidebar.
 *
 * @param {Props} props - Props for the SidebarContent component.
 * @returns {JSX.Element}
 */
export default function SidebarContent({ children, customStyle, draggable, minWidth = 0, collapseButtonsInside = true, customHeader, toggleIcon, toggleSidebar, onToggleSidebar, tooltipIconText = "Hide sidebar" }) {
    const isDesktop = useContext(IsDesktopContext);
    const { collapsed, setCollapsed } = useContext(SidebarContext);
    const collapsedContentStyle = collapsed && (minWidth === 0 || !isDesktop) ? styles.closed : "";
    const collapsedContainerStyle = collapsed ? styles.collapsedContainer : "";
    const { isDragging, width, onDragEndHandler, onDragHandler, onDragStartHandler } = UseDraggable({ setCollapsed, collapsed, minWidth });
    const transitionClass = !isDragging ? styles.sidebarTransition : "";
    const shouldDrag = isDesktop && draggable;
    const { elementRef, rect } = UseGetElementDimension();
    return (React.createElement("div", { className: `${styles.sidebarContainer} ${customStyle?.sidebarContainer || ""} ${collapsedContainerStyle}`, style: {
            width: isDesktop && typeof width === "number" ? width : "",
            minWidth: minWidth > 0 && isDesktop ? minWidth : "",
            transition: "width 0.5s ease"
        }, ref: !customHeader ? elementRef : undefined },
        React.createElement("div", { className: `
        ${styles.sidebarContent} 
        ${transitionClass} 
        ${!toggleSidebar ? collapsedContentStyle : ""}
        ${customStyle?.sidebarContent || ""}` },
            shouldDrag && (React.createElement("div", { className: styles.resize, onMouseDown: onDragStartHandler, "data-testid": "draghandler" },
                React.createElement("div", { className: styles.hoverEffect }))),
            customHeader ? (React.createElement("div", { className: customStyle?.sidebarContent
                    ? customStyle?.sidebarContent
                    : styles.sidebarHeader, ref: elementRef },
                isDesktop && !collapsed && collapseButtonsInside ? (React.createElement("div", { className: styles.collapseButtonOnSidebar, onClick: () => setCollapsed((prevState) => !prevState), style: {
                        left: rect ? rect.width - 50 || undefined : "",
                        bottom: rect ? rect.height / 4 : ""
                    }, "data-testid": "toogle-icon" },
                    React.createElement(Tooltip, { position: "right", tooltipToggle: React.createElement("div", { className: styles.sidebarIcon }, toggleIcon ? toggleIcon : React.createElement(ArrowDrag, null)), tooltipText: tooltipIconText, withSeparator: false }))) : null,
                !isDesktop && collapseButtonsInside ? (React.createElement("div", { className: styles.collapseButtonOnSidebar, onClick: () => {
                        if (onToggleSidebar)
                            onToggleSidebar(false);
                    }, style: {
                        left: rect ? rect.width - 40 || undefined : "",
                        bottom: rect ? rect.height / 3 : ""
                    }, "data-testid": "toogle-icon" },
                    React.createElement(Tooltip, { position: "right", tooltipToggle: React.createElement("div", { className: styles.sidebarIcon }, toggleIcon ? toggleIcon : React.createElement(ArrowDrag, null)), tooltipText: tooltipIconText, withSeparator: false }))) : null,
                customHeader)) : (React.createElement(React.Fragment, null,
                isDesktop && !collapsed && collapseButtonsInside ? (React.createElement("div", { className: styles.collapseButtonOnSidebar, onClick: () => setCollapsed((prevState) => !prevState), style: {
                        left: rect ? rect.width - 40 || undefined : "",
                        top: 12
                    }, "data-testid": "toogle-icon" },
                    React.createElement(Tooltip, { position: "right", tooltipToggle: React.createElement("div", { className: styles.sidebarIcon }, toggleIcon ? toggleIcon : React.createElement(ArrowDrag, null)), tooltipText: tooltipIconText, withSeparator: false }))) : null,
                isDesktop && collapsed && collapseButtonsInside ? (React.createElement("div", { className: styles.collapseButtonOnSidebarCollapsed, onClick: () => setCollapsed((prevState) => !prevState), style: {
                        left: rect ? rect.width - 40 || undefined : "",
                        top: 12
                    }, "data-testid": "toogle-icon" }, toggleIcon ? toggleIcon : React.createElement(ArrowDrag, null))) : null)),
            children),
        !isDesktop && toggleSidebar ? (React.createElement(React.Fragment, null,
            React.createElement(Portal, null,
                React.createElement("div", { className: styles.menuBackdrop, onClick: () => {
                        if (onToggleSidebar)
                            onToggleSidebar(false);
                    } })),
            !collapseButtonsInside ? (React.createElement(Button, { onClick: () => {
                    if (onToggleSidebar)
                        onToggleSidebar(false);
                }, className: styles.closeButton },
                React.createElement(Close, null))) : null)) : null,
        shouldDrag && isDragging ? (React.createElement(Portal, null,
            React.createElement("div", { className: styles.draggableScreenSidebar, onMouseMove: (e) => {
                    const paddingLeft = rect ? rect.left : 0;
                    onDragHandler(e, paddingLeft);
                }, onMouseUp: () => {
                    onDragEndHandler();
                }, "data-testid": "draggableScreen" }))) : null));
}
