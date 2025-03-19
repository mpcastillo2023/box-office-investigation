/* eslint-disable react/jsx-no-literals */
import React from "react";
import styles from "../Styles/styles.module.scss";
export default function OptionList({ optionList, onClickOptionHandler, selectedOptionValue, customStyle, ariaLabel, currentFocusIndex, activeItemRef, withSubtitle, translations }) {
    const renderOptions = () => {
        const renderOptionItem = (option, index) => {
            if (option.disabled)
                return null;
            const isActive = selectedOptionValue === option.optionValue ||
                index === currentFocusIndex;
            let listActiveClass;
            if (isActive) {
                listActiveClass = customStyle?.activeOption
                    ? customStyle.activeOption
                    : "";
            }
            else {
                listActiveClass = "";
            }
            const preselectedTestId = index === currentFocusIndex
                ? "dropdown-option-preselected"
                : "dropdown-option-not-preselected";
            return (React.createElement("li", { ref: isActive ? activeItemRef : undefined, className: `${listActiveClass} ${styles.optionListItem} ${customStyle?.optionListItem || ""} ${withSubtitle && styles.listWithPadding}`, "data-value": option.optionValue, key: `${option.optionValue}-${index}`, onClick: () => onClickOptionHandler(option.optionValue), role: "option", "aria-selected": selectedOptionValue === option.optionValue, "aria-label": `${option.optionText}`, tabIndex: isActive ? 0 : -1, "data-testid": preselectedTestId }, option.optionText));
        };
        if (withSubtitle) {
            const enabledOptions = optionList.filter((option) => option.optionAvailability);
            const disabledOptions = optionList.filter((option) => !option.optionAvailability);
            return (React.createElement(React.Fragment, null,
                enabledOptions.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("li", { className: styles.subTitle }, translations.enabledLabel),
                    enabledOptions.map((option, index) => {
                        return renderOptionItem(option, index);
                    }))) : null,
                disabledOptions.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("li", { className: styles.subTitle }, translations.disabledLabel),
                    disabledOptions.map((option, index) => {
                        return renderOptionItem(option, index);
                    }))) : null));
        }
        else {
            return optionList.map((option, index) => {
                return renderOptionItem(option, index);
            });
        }
    };
    return (React.createElement("ul", { className: `${customStyle?.optionList || ""} ${styles.optionList}`, role: "listbox", "aria-label": ariaLabel, tabIndex: -1 }, renderOptions()));
}
