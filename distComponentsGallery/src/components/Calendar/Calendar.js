import React from "react";
import styles from "./Styles/styles.module.scss";
import CalendarWeekDays from "./CalendarWeekDays/CalendarWeekDays";
import CalendarDays from "./CalendarDays/CalendarDays";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import UseCalendar from "./Hooks/UseCalendar";
export default function Calendar(props) {
    const { minDate, maxDate, shouldRenderYearButtons = false, customStyles } = props;
    const { month, year, currentLocale, nextMonthHandler, prevMonthHandler, selectDayHandler, prevYearHandler, nextYearHandler, selectedDates } = UseCalendar(props);
    return (React.createElement("div", { className: `${styles.calendarWrapper}  ${customStyles?.customCalendarWrapper || ""}` },
        React.createElement(CalendarHeader, { customStyles: customStyles, nextMonthHandler: nextMonthHandler, prevMonthHandler: prevMonthHandler, nextYearHandler: nextYearHandler, prevYearHandler: prevYearHandler, currentLocale: currentLocale, year: year, month: month, shouldRenderYearButtons: shouldRenderYearButtons }),
        React.createElement(CalendarWeekDays, { customStyles: customStyles, currentLocale: currentLocale }),
        React.createElement(CalendarDays, { year: year, month: month, selectDayHandler: selectDayHandler, minDate: minDate, maxDate: maxDate, customStyles: customStyles, selectedDates: selectedDates })));
}
