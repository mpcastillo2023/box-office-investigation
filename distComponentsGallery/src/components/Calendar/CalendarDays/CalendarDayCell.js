import React from "react";
import styles from "../Styles/styles.module.scss";
export default function CalendarDayCell({ day, month, year, selectDayHandler, isActive = false, disabled, customStyles }) {
    if (disabled) {
        return (React.createElement("button", { className: `${styles.calendarDayCell} ${customStyles?.customCalendarDayButton} ${styles.calendarCellDisabled}`, key: `${day}-${month}`, "data-testid": `${day}-${month}` },
            React.createElement("span", { className: styles.cellText }, day)));
    }
    const activeDayStyle = isActive ? styles.activeCell : "";
    return (React.createElement("button", { className: `${styles.calendarDayCell} ${customStyles?.customCalendarDayButton} ${activeDayStyle} `, key: `${day}-${month}`, onClick: () => selectDayHandler(day), "data-testid": `${day}-${month + 1}-${year}`, "aria-label": `${day}-${month + 1}-${year}` },
        React.createElement("span", { className: styles.cellText }, day)));
}
