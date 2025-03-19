/* eslint-disable react/jsx-no-literals */
import React from "react";
import styles from "../Styles/styles.module.scss";
import ChevronLeft from "@cg-icons/ChevronLeft.svg";
import ChevronDoubleLeft from "@cg-icons/ChevronDoubleLeft.svg";
import ChevronRight from "@cg-icons/ChevronRight.svg";
import ChevronDoubleRight from "@cg-icons/ChevronDoubleRight.svg";
export default function CalendarHeader({ prevMonthHandler, nextMonthHandler, prevYearHandler, nextYearHandler, currentLocale, year, month, shouldRenderYearButtons, customStyles }) {
    const currentDateText = new Intl.DateTimeFormat(currentLocale, {
        year: "numeric",
        month: "long"
    }).format(new Date(year, month));
    const capitalizedDateText = currentDateText.charAt(0).toUpperCase() + currentDateText.slice(1);
    return (React.createElement("div", { className: `${styles.calendarHeader} ${customStyles?.customCalendarHeader}` },
        shouldRenderYearButtons ? (React.createElement("button", { className: styles.headerButtons, onClick: prevYearHandler, "aria-label": "prev-year" },
            React.createElement(ChevronDoubleLeft, null))) : null,
        React.createElement("button", { className: styles.headerButtons, onClick: prevMonthHandler, "aria-label": "prev-month" },
            React.createElement(ChevronLeft, null)),
        React.createElement("span", { "data-testid": "chosen-date" }, capitalizedDateText),
        React.createElement("button", { className: styles.headerButtons, onClick: nextMonthHandler, "aria-label": "next-month" },
            React.createElement(ChevronRight, null)),
        shouldRenderYearButtons ? (React.createElement("button", { className: styles.headerButtons, onClick: nextYearHandler, "aria-label": "next-year" },
            React.createElement(ChevronDoubleRight, null))) : null));
}
