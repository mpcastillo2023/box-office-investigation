import React from "react";
import getDaysOfMonth from "../Utils/getDaysOfMonth";
import getFirstDayOfMonth from "../Utils/getFirstDayOfMonth";
import styles from "../Styles/styles.module.scss";
import CalendarDayRows from "./CalendarDayRows";
import CalendarDayCell from "./CalendarDayCell";
export default function CalendarDays({ selectDayHandler, year, month, disabled, minDate, maxDate, selectedDates, customStyles }) {
    const daysOfMonth = getDaysOfMonth(year, month);
    let firstDayOfMonth = getFirstDayOfMonth(year, month);
    if (firstDayOfMonth === 0) {
        firstDayOfMonth = 7;
    }
    let daysOfPrevMonth = getDaysOfMonth(year, month - 1) - (firstDayOfMonth - 2);
    const renderCalendarDays = () => {
        let calendarCells = [];
        let i = 2;
        let rowCount = 0;
        const daysRow = [];
        while (i <= daysOfMonth + firstDayOfMonth) {
            if (rowCount === 7) {
                daysRow.push(React.createElement(CalendarDayRows, { calendarDays: calendarCells, key: i }));
                rowCount = 0;
                calendarCells = [];
            }
            if (i > firstDayOfMonth) {
                // Render normal days
                const day = i - firstDayOfMonth;
                const dateOfCell = new Date(year, month, day);
                let isActive = false;
                if (selectedDates) {
                    if (Array.isArray(selectedDates)) {
                        for (let i = 0; i < selectedDates.length; i++) {
                            const selectedDate = selectedDates[i];
                            const dateOnly1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
                            const dateOnly2 = new Date(dateOfCell.getFullYear(), dateOfCell.getMonth(), dateOfCell.getDate());
                            if (dateOnly1.getTime() === dateOnly2.getTime()) {
                                isActive = true;
                                break;
                            }
                        }
                    }
                    else {
                        isActive = selectedDates.getTime() === dateOfCell.getTime();
                    }
                }
                calendarCells.push(React.createElement(CalendarDayCell, { day: day, isActive: isActive, selectDayHandler: selectDayHandler, month: month, year: year, key: i, disabled: disabled ||
                        (maxDate && maxDate < dateOfCell) ||
                        (minDate && minDate > dateOfCell), customStyles: customStyles }));
            }
            else {
                // Render days of previous month
                calendarCells.push(React.createElement(CalendarDayCell, { year: year, day: daysOfPrevMonth, selectDayHandler: selectDayHandler, month: month - 1, disabled: true, key: i, customStyles: customStyles }));
                daysOfPrevMonth++;
            }
            rowCount++;
            i++;
            if (i > daysOfMonth + firstDayOfMonth) {
                // Render days of next month
                const remainer = 7 - calendarCells.length;
                for (let i = 0; i < remainer; i++) {
                    calendarCells.push(React.createElement(CalendarDayCell, { year: year, day: i + 1, selectDayHandler: selectDayHandler, disabled: true, month: month + 1, key: i }));
                }
                // Add last row
                daysRow.push(React.createElement(CalendarDayRows, { calendarDays: calendarCells, key: i }));
            }
        }
        return daysRow;
    };
    return React.createElement("div", { className: styles.row }, renderCalendarDays());
}
