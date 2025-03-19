import React from "react";
import { Dropdown } from "..";
import UseWeekDaysSelect from "./Hooks/UseWeekDaysSelect";
import { renderDaysSelected } from "./Utils/renderDaySelected";
import styles from "./Styles/styles.module.scss";
import ChevronDown from "@cg-icons/ChevronDown.svg";
import ChevronUp from "@cg-icons/ChevronUp.svg";
import WeekDays from "./Days/WeekDays";
/**
 * WeekDaysSelect component represents a week of the days that allows users to check on days,
 * and those clicked days are displayed and the user can toggle days.
 *
 * @param {Props} props - Props for the WeekDaysButtons component.
 * @returns {JSX.Element}
 */
const WeekDaysSelect = ({ icon = React.createElement(ChevronDown, null), activeIcon = React.createElement(ChevronUp, null), className = "", disabled = false, ariaLabel = "weekdays-select", noDaysSelectedMessage = "Seleccione mínimo un día", weekDaysOrderMessage, options, ...props }) => {
    const { handleSelectedDays, value } = UseWeekDaysSelect({
        ...props
    });
    const disabledClass = disabled ? styles.disabled : "";
    return (React.createElement("div", { className: `${styles.weekDayContainer}` },
        React.createElement("div", { className: `${className}  ${styles.weekDaySelector}` },
            React.createElement(Dropdown, { customPosition: { bottom: 0, top: 0 }, disabled: disabled, icon: icon, activeIcon: activeIcon, ariaLabel: ariaLabel, customStyle: styles, dropdownElement: React.createElement("div", { className: `${disabledClass}`, "data-testid": "dropdown-toggle-select", tabIndex: 0 },
                    React.createElement("span", { className: styles.daysInfo }, renderDaysSelected(options, value, weekDaysOrderMessage, noDaysSelectedMessage))), dropdownContent: React.createElement(WeekDays, { filteredOptions: options, disabled: disabled, handleSelectedDays: handleSelectedDays, value: value }) }))));
};
export default WeekDaysSelect;
