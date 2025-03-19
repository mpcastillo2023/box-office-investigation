import React from "react";
import styles from "../Styles/styles.module.scss";
export default function CalendarDayRows({ calendarDays }) {
    return React.createElement("div", { className: styles.row }, calendarDays);
}
