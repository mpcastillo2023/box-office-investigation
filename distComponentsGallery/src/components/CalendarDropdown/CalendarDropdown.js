/* eslint-disable react/jsx-no-literals */
import Dropdown from "@cg-components/Dropdown/Dropdown";
import React, { useState } from "react";
import styles from "./Styles/styles.module.scss";
import Calendar from "@cg-components/Calendar/Calendar";
import transformStringToDate from "@cg-utils/transformStringToDate";
import transformMonthCodeToName from "@cg-utils/transformMonthCodeToName";
export default function CalendarDropdown({ onChange, value, disabled, minDate, maxDate, customStyle, defaultValue = new Date(), ariaLabel }) {
    const parsedValue = typeof value === "string" ? transformStringToDate(value) : value;
    const [date, setDate] = useState(defaultValue);
    const day = parsedValue ? parsedValue.getDate() : date.getDate();
    const month = parsedValue ? parsedValue.getMonth() + 1 : date.getMonth() + 1;
    const year = parsedValue ? parsedValue.getFullYear() : date.getFullYear();
    const dateText = `${day} ${transformMonthCodeToName(String(month))} ${year}`;
    return (React.createElement(Dropdown, { customStyle: styles, customPosition: { bottom: 0, top: 0 }, autowidth: true, contentShouldCenter: true, ariaLabel: ariaLabel, dropdownElement: React.createElement("div", { tabIndex: 0 },
            React.createElement("div", { className: `${styles.inputContainer} ${customStyle?.inputContainer || ""}` },
                React.createElement("input", { className: `${styles.input} ${customStyle?.input || ""}`, value: dateText, readOnly: true, disabled: disabled, "aria-label": ariaLabel }))), dropdownContent: React.createElement(Calendar, { customStyles: styles, onChange: (newDate) => {
                document.dispatchEvent(new CustomEvent("closeDropdowns"));
                if (onChange) {
                    onChange(newDate);
                }
                else {
                    setDate(newDate);
                }
            }, value: parsedValue, disabled: disabled, minDate: minDate, maxDate: maxDate }) }));
}
