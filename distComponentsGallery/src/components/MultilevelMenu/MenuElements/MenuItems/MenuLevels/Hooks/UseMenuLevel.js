import { useEffect, useState } from "react";
import UseGetElementDimension from "@cg-hooks/UseGetElementDimension";
import { useLocation } from "react-router";
import levelHasActiveLink from "../Utils/levelHasActiveLink";
export default function UseMenuLevel({ menuItem, level, setCurrentlyOpenedParentMenu, currentlyOpenedParentMenu, parentId, setLeftBorderPositions }) {
    const defaultOpen = typeof menuItem.defaultCollapsed !== "undefined"
        ? !menuItem.defaultCollapsed
        : false;
    const [open, setOpen] = useState(defaultOpen);
    const activeIconToDisplay = menuItem.activeIcon
        ? menuItem.activeIcon
        : menuItem.icon;
    const iconToDisplay = open ? activeIconToDisplay : menuItem.icon;
    const { rect, elementRef } = UseGetElementDimension();
    const leftBorderDimension = UseGetElementDimension();
    const leftPadding = 30;
    const isFirstLevel = level === 1;
    const leftBorderPosition = rect
        ? rect.width / 2 + leftPadding / 2
        : undefined;
    const location = useLocation();
    useEffect(() => {
        if (menuItem.children &&
            levelHasActiveLink(menuItem.children, location.pathname)) {
            setOpen(true);
            setCurrentlyOpenedParentMenu(parentId);
        }
    }, [location]);
    useEffect(() => {
        if (typeof currentlyOpenedParentMenu !== "undefined" &&
            currentlyOpenedParentMenu !== parentId) {
            setOpen(false);
        }
    }, [currentlyOpenedParentMenu]);
    useEffect(() => {
        if (isFirstLevel && leftBorderPosition) {
            setLeftBorderPositions((prevState) => {
                const newBorderPositions = { ...prevState };
                newBorderPositions[parentId] = leftBorderPosition;
                return newBorderPositions;
            });
        }
    }, [leftBorderPosition]);
    return {
        iconToDisplay,
        open,
        setOpen,
        rect,
        elementRef,
        leftBorderDimension,
        leftPadding,
        isFirstLevel,
        leftBorderPosition
    };
}
