import React from "react";
import { CalendarInput, TimeInput } from "..";
import UseGetDateTime from "./Hooks/UseGetDateTime";
import styles from "./Styles/styles.module.scss";
/**
 * DateTime component represents a calendar input and time input that let
 * display and change dates and hours
 * @param {Props} Props  - Props for the DateTime component
 * @returns {JSX.Element}
 */
const DateTime = ({ currentLocale, disabled, value, onChange, required = true, maxDate = new Date("2500/01/01"), minDate, id, timeInputClassName, hasSeconds }) => {
    const { handleChangeDate, date, time, handleChangeTime } = UseGetDateTime({
        dateToTransform: value,
        onChange
    });
    const timeInputStyles = `${timeInputClassName}`;
    return (React.createElement("div", { className: styles.dateTimeContainer, "aria-label": id ? `date-time-input-${id}` : "date-time-input" },
        React.createElement(CalendarInput, { value: date, onChange: (date) => {
                handleChangeDate(date);
            }, maxDate: maxDate, minDate: minDate, disabled: disabled, ariaLabel: id, customClassName: styles.dateTimeCalendar }),
        React.createElement(TimeInput, { hoursPlaceholder: "hh", minutesPlaceholder: "mm", value: time, onChange: (value) => {
                handleChangeTime(value);
            }, hasSeconds: hasSeconds, currentLocale: currentLocale, disabled: disabled, required: required, className: timeInputStyles, id: `${id}-time`, ariaLabel: `${id}-time`, hoursAriaLabel: `${id}-hour`, minutesAriaLabel: `${id}-minute` })));
};
export default DateTime;
