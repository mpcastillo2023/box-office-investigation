/* eslint-disable react/jsx-no-literals */
import React from "react";
import CalendarSvg from "@cg-icons/Calendar.svg";
import { Calendar, Dropdown } from "..";
import styles from "./Styles/styles.module.scss";
import UseCalendarInput from "./Hooks/UseCalendarInput";
import transformStringToDate from "@cg-utils/transformStringToDate";
import ChevronDown from "@cg-icons/ChevronDown.svg";
import ChevronUp from "@cg-icons/ChevronUp.svg";
export default function CalendarInput({ onChange, value, disabled, minDate, maxDate, ariaLabel, customClassName, customStyles, onCalendarOpen }) {
    const parsedValue = typeof value === "string" ? transformStringToDate(value) : value;
    const { onDayChangeHandler, day, dayRef, onMonthChangeHandler, month, monthRef, onYearChangeHandler, year, yearRef, calendarDate, onChangeCalendar, validateMinMaxDate, isDateComplete, isDayValid, isMonthValid } = UseCalendarInput({
        onChange,
        value: parsedValue,
        disabled,
        minDate,
        maxDate
    });
    const customAriaLabel = ariaLabel ? `${ariaLabel}-` : "";
    return (React.createElement("div", { className: `${styles.calendarInputContainer} ${customStyles?.customCalendarInputContainer || ""}` },
        React.createElement(Dropdown, { customStyle: styles, icon: React.createElement(ChevronDown, null), activeIcon: React.createElement(ChevronUp, null), customPosition: { bottom: 0, top: 0 }, onDropdownToggle: (isOpen) => {
                if (onCalendarOpen)
                    onCalendarOpen(isOpen);
            }, disabled: disabled, dropdownElement: React.createElement("div", { className: `${styles.calendarInput} ${customClassName}`, tabIndex: 0 },
                React.createElement("div", { className: styles.inputsIconContainer },
                    React.createElement("div", { className: styles.calendarIconContainer },
                        React.createElement(CalendarSvg, null)),
                    React.createElement("div", { className: styles.inputsContainer },
                        React.createElement("input", { type: "number", placeholder: "dd/", onChange: onDayChangeHandler, value: day, ref: dayRef, "aria-label": customAriaLabel + "day-input", disabled: disabled, onBlur: (e) => {
                                if (isDateComplete) {
                                    const newDay = parseInt(e.target.value);
                                    validateMinMaxDate(new Date(year, month - 1, newDay));
                                }
                            }, style: {
                                width: day.toString().length > 0
                                    ? `${day.toString().length}ch`
                                    : `3ch`
                            } }),
                        isDayValid ? (React.createElement("span", { className: disabled ? styles.disabledSpan : "" }, "/")) : null,
                        React.createElement("input", { type: "number", placeholder: "mm/", onChange: onMonthChangeHandler, value: month, ref: monthRef, "aria-label": customAriaLabel + "month-input", disabled: disabled, onBlur: (e) => {
                                if (isDateComplete) {
                                    const newMonth = parseInt(e.target.value);
                                    validateMinMaxDate(new Date(year, newMonth - 1, day));
                                }
                            }, style: {
                                width: month.toString().length > 0
                                    ? `${month.toString().length}ch`
                                    : `4ch`
                            } }),
                        isMonthValid ? (React.createElement("span", { className: disabled ? styles.disabledSpan : "" }, "/")) : null,
                        React.createElement("input", { type: "number", placeholder: "yyyy", onChange: onYearChangeHandler, value: year, ref: yearRef, "aria-label": customAriaLabel + "year-input", disabled: disabled, onBlur: (e) => {
                                if (isDateComplete) {
                                    const newYear = parseInt(e.target.value);
                                    validateMinMaxDate(new Date(newYear, month - 1, day));
                                }
                            }, style: {
                                width: year.toString().length > 0
                                    ? `${year.toString().length}ch`
                                    : `4ch`
                            } })))), dropdownContent: React.createElement(Calendar, { onChange: onChangeCalendar, value: calendarDate, disabled: disabled, minDate: minDate, maxDate: maxDate, customStyles: styles }) })));
}
