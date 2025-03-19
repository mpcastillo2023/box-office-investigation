import React, { useEffect } from "react";
import styles from "../Styles/styles.module.scss";
import UseDropdown from "../Hooks/UseDropdownContent";
import { Portal } from "@cg-components/Portal/Portal";
export default function DropdownContent({ dropdownContent, toggleElementRect, isOpen, setIsOpen, autowidth, customStyle, customPosition, setIsOverflow, contentShouldCenter = false, blueMode = false }) {
    const { dropdownContentRef, position, maxHeight, tooltipHandlePosition, isOverflowToBottom } = UseDropdown({
        isOpen,
        setIsOpen,
        toggleElementRect,
        customPosition,
        contentShouldCenter
    });
    useEffect(() => {
        if (setIsOverflow) {
            setIsOverflow(isOverflowToBottom);
        }
    }, [isOverflowToBottom]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Portal, null,
            React.createElement("div", { className: styles.dropdownBlackdrop, onClick: () => setIsOpen(false) })),
        React.createElement(Portal, { className: styles.portalDropdown },
            React.createElement("div", { style: {
                    width: toggleElementRect?.width && !autowidth
                        ? toggleElementRect.width
                        : "",
                    ...position,
                    maxHeight: maxHeight || "",
                    overflow: "auto"
                }, className: `${styles.dropdownContainer} ${isOverflowToBottom ? customStyle?.overflowBottom : ""}
          ${styles[tooltipHandlePosition] || ""} ${styles.dropdownContentFixed} ${customStyle?.dropdownContentFixed || ""}
          ${customStyle?.dropdownContainer || ""}` },
                React.createElement("div", { ref: dropdownContentRef, className: `${styles.dropdownContent} ${customStyle?.dropdownContent} ${blueMode && styles.blueMode}`, "data-testid": "dropdown-content" }, dropdownContent)))));
}
