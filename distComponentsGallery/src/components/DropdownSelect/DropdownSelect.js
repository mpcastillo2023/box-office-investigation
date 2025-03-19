import React, { useState } from "react";
import UseDropdownSelect from "./Hooks/UseDropdownSelect";
import OptionList from "./OptionList/OptionList";
import styles from "./Styles/styles.module.scss";
import UseDropdownToggle from "@cg-components/Dropdown/Hooks/UseDropdownToggle";
import DropdownContent from "@cg-components/Dropdown/DropdownContent/DropdownContent";
import UseSelectSearch from "./Hooks/UseSelectSearch";
import ChevronUp from "@cg-icons/ControlArrowUp.svg";
import ChevronDown from "@cg-icons/ControlArrowDown.svg";
const defaultTranslations = {
    enabledLabel: "Enabled",
    disabledLabel: "Disabled"
};
/**
 * The DropdownSelect component provides a customizable dropdown select interface, allowing users to select from a list of options.
 * It can be configured with different sizes, styles, and behaviors, and it includes optional labeling, error handling, and more.
 *
 * @param {Props} props - Props for the DropdownSelect component.
 * @returns {JSX.Element}
 */
export default function DropdownSelect({ value = "", optionList, placeholder, iconOnLeft = false, icon = React.createElement(ChevronDown, null), activeIcon = React.createElement(ChevronUp, null), onChange, customStyle, ariaLabel = "", variant = "primary", size = "auto", className = "", disabled = false, hasError = false, autowidth = false, withSubtitle = false, translations = defaultTranslations }) {
    const [isOverflow, setIsOverflow] = useState(false);
    const { toggleElementRect, toggleElementRef, currentIcon, toggleDropdownHandler, setIsOpen, isOpen } = UseDropdownToggle({
        icon,
        activeIcon,
        disabled
    });
    const { selectedOption, onClickOptionHandler } = UseDropdownSelect({
        optionList,
        value,
        onChange,
        setIsOpen
    });
    const { searchQuery, activeItemRef, currentFocusIndex, keydownHandler, searchRef, searchHandler, filteredOptionList } = UseSelectSearch({
        optionList: optionList,
        selectedOption: selectedOption,
        isOpen: isOpen,
        setIsOpen,
        onClickOptionHandler
    });
    const disabledClass = disabled ? styles.disabled : "";
    const errorClass = hasError ? styles.withError : "";
    const overflowDropDownClass = isOverflow
        ? { ...styles, overflowBottom: styles.overflowBottom }
        : styles;
    const overflowSelectClass = isOverflow && isOpen
        ? styles.overflowBottomDropdownElement
        : styles.dropdownElement;
    return (React.createElement("div", { className: `${styles[variant]} ${styles[size]} ${errorClass} ${styles.basicDropdownStyles} ${className}` },
        React.createElement("div", { className: `${styles.dropdownWrapper} ${customStyle?.dropdownWrapper || ""} ${disabledClass}` },
            React.createElement("button", { onClick: toggleDropdownHandler, className: `${overflowSelectClass} ${customStyle?.dropdownElement || ""} ${disabledClass}`, "aria-expanded": isOpen ? "true" : "false", "data-testid": "dropdown-toggle", "aria-label": ariaLabel, disabled: disabled, tabIndex: 0, onKeyDown: keydownHandler, ref: toggleElementRef },
                iconOnLeft && currentIcon,
                placeholder ? (React.createElement("span", { className: `${customStyle?.placeholder || ""} ${styles.placeholder}` }, placeholder)) : null,
                React.createElement("span", { style: { display: "none" } }, selectedOption?.optionText),
                React.createElement("input", { className: `${customStyle?.selectedOption || ""} ${styles.searchSelect}`, onChange: searchHandler, value: searchQuery, ref: searchRef, "aria-label": ariaLabel, "data-testid": "dropdown-search", disabled: disabled }),
                !iconOnLeft && currentIcon),
            isOpen && !disabled ? (React.createElement(DropdownContent, { toggleElementRect: toggleElementRect, isOpen: isOpen, setIsOpen: setIsOpen, dropdownContent: React.createElement(OptionList, { onClickOptionHandler: onClickOptionHandler, optionList: filteredOptionList, selectedOptionValue: selectedOption?.optionValue, customStyle: customStyle, ariaLabel: ariaLabel, currentFocusIndex: currentFocusIndex, activeItemRef: activeItemRef, withSubtitle: withSubtitle, translations: translations }), autowidth: autowidth, customStyle: { ...overflowDropDownClass, ...customStyle }, toggleDropdownHandler: toggleDropdownHandler, customPosition: { top: 0, bottom: 0 }, setIsOverflow: setIsOverflow })) : null)));
}
