import React from "react";
import getDaysForLocale from "../Utils/getDaysForLocale";
import styles from "../Styles/styles.module.scss";
export default function CalendarWeekDays({ currentLocale, customStyles }) {
    const listOfWeekdays = getDaysForLocale(currentLocale);
    return (React.createElement("div", { className: `${styles.row} ${styles.rowColumn}` }, listOfWeekdays.map((weekday) => (React.createElement("div", { className: `${styles.calendarWeekdayCell} ${customStyles?.customcalendarWeekdayCell}`, key: weekday }, weekday)))));
}
