import React from "react";
import styles from "./Styles/styles.module.scss";
import DropdownContent from "./DropdownContent/DropdownContent";
import UseDropdownToggle from "./Hooks/UseDropdownToggle";
/**
 * The Dropdown component provides a customizable dropdown interface, allowing users to select from various options.
 * It offers flexibility in styling, alignment, and behavior, accommodating different use cases and design preferences.
 *
 * @param {Props} props - Props for the Dropdown component.
 * @returns {JSX.Element}
 */
export default function Dropdown({ dropdownElement, dropdownContent, icon, activeIcon, iconOnLeft, customStyle, autowidth = false, ariaLabel = "", disabled = false, contentShouldCenter = true, customPosition, blueMode, onDropdownToggle }) {
    const { toggleElementRect, toggleElementRef, currentIcon, toggleDropdownHandler, setIsOpen, isOpen, isOverflow, setIsOverflow } = UseDropdownToggle({
        icon,
        activeIcon,
        disabled,
        onDropdownToggle
    });
    const disabledClass = disabled ? styles.disabled : "";
    const isOverFlowToggleElement = isOverflow
        ? customStyle?.overflowDropdownElement
        : customStyle?.dropdownElement;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: ` ${styles.dropdownWrapper} ${customStyle?.dropdownWrapper || ""} ${disabledClass}` },
            React.createElement("button", { ref: toggleElementRef, onClick: toggleDropdownHandler, className: `${styles.dropdownElement} ${isOverFlowToggleElement || ""} ${disabledClass}`, "aria-expanded": isOpen ? "true" : "false", "data-testid": "dropdown-toggle", "aria-label": ariaLabel, disabled: disabled, tabIndex: 0 },
                iconOnLeft && currentIcon,
                dropdownElement,
                !iconOnLeft && currentIcon),
            isOpen && !disabled ? (React.createElement(DropdownContent, { toggleElementRect: toggleElementRect, isOpen: isOpen, setIsOpen: setIsOpen, dropdownContent: dropdownContent, autowidth: autowidth, customStyle: customStyle, toggleDropdownHandler: toggleDropdownHandler, contentShouldCenter: contentShouldCenter, customPosition: customPosition, setIsOverflow: setIsOverflow, blueMode: blueMode })) : null)));
}
