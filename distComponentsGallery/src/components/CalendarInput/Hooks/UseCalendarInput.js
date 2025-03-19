import { useEffect, useRef, useState } from "react";
export default function UseCalendarInput({ onChange, value, disabled, minDate, maxDate }) {
    const dayValue = value ? value.getDate() : "";
    const monthValue = value ? value.getMonth() + 1 : "";
    const yearValue = value ? value.getFullYear() : "";
    const [day, setDay] = useState(dayValue);
    const [month, setMonth] = useState(monthValue);
    const [year, setYear] = useState(yearValue);
    const [calendarDate, setCalendarDate] = useState();
    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);
    const isDayValid = day.toString().length >= 1 && day !== "";
    const isMonthValid = month.toString().length >= 1 && month !== "";
    const isYearValid = year.toString().length > 3 && year !== "";
    const isDateComplete = isDayValid && isMonthValid && isYearValid;
    const onDayChangeHandler = (e) => {
        const inputValue = e.target.value;
        if (inputValue === "") {
            setDay("");
            return;
        }
        const newDay = parseInt(inputValue);
        const isDayValid = (newDay > 0 && newDay <= 31) ||
            (inputValue.length === 1 && inputValue[0] === "0");
        if (isDayValid) {
            setDay(newDay);
            if (inputValue.length > 1 && monthRef.current) {
                monthRef.current.focus();
            }
        }
    };
    const onMonthChangeHandler = (e) => {
        const value = e.target.value;
        if (value === "") {
            setMonth("");
            return;
        }
        const newMonth = parseInt(value);
        const isMonthValid = (newMonth > 0 && newMonth <= 12) ||
            (value.length === 1 && value[0] === "0");
        if (isMonthValid) {
            setMonth(newMonth);
            if ((value.length > 1 || newMonth > 1) && yearRef.current) {
                yearRef.current.focus();
            }
        }
    };
    const onYearChangeHandler = (e) => {
        const value = e.target.value;
        if (value === "") {
            setYear("");
            return;
        }
        const newYear = parseInt(e.target.value);
        const isYearValid = (newYear > 0 && newYear <= 3000) || value === "";
        if (isYearValid) {
            setYear(newYear);
        }
    };
    const onChangeCalendar = (date) => {
        if (onChange) {
            onChange(date);
            document.dispatchEvent(new CustomEvent("closeDropdowns"));
        }
        else {
            setYear(date.getFullYear());
            setMonth(date.getMonth() + 1);
            setDay(date.getDate());
            document.dispatchEvent(new CustomEvent("closeDropdowns"));
        }
        setYear(date.getFullYear());
        setMonth(date.getMonth() + 1);
        setDay(date.getDate());
    };
    const validateMinMaxDate = (possibleDate) => {
        if (isDateComplete) {
            const newDate = possibleDate
                ? possibleDate
                : new Date(year, month - 1, day);
            if (maxDate && maxDate < newDate) {
                const maxValidDate = new Date(maxDate.getTime());
                maxValidDate.setDate(maxValidDate.getDate());
                const validDayValue = maxValidDate.getDate();
                const validMonthValue = maxValidDate.getMonth() + 1;
                const validYearValue = maxValidDate.getFullYear();
                setDay(validDayValue);
                setMonth(validMonthValue);
                setYear(validYearValue);
            }
            else if (minDate && minDate > newDate) {
                const minValidDate = new Date(minDate.getTime());
                minValidDate.setDate(minValidDate.getDate());
                const validDayValue = minValidDate.getDate();
                const validMonthValue = minValidDate.getMonth() + 1;
                const validYearValue = minValidDate.getFullYear();
                setDay(validDayValue);
                setMonth(validMonthValue);
                setYear(validYearValue);
            }
        }
    };
    useEffect(() => {
        if (isDateComplete) {
            const checkIfDayIsBiggerThanMaxDay = () => {
                const numberOfDaysForMonth = new Date(year, month, 0).getDate();
                setCalendarDate(new Date(year, month - 1, day));
                const isDayBiggerThanMaxDay = numberOfDaysForMonth < day;
                if (isDayBiggerThanMaxDay) {
                    setDay(numberOfDaysForMonth);
                    if (onChange) {
                        const newDateValue = new Date(year, month - 1, numberOfDaysForMonth);
                        onChange(newDateValue);
                    }
                }
            };
            checkIfDayIsBiggerThanMaxDay();
        }
    }, [month, day, year]);
    useEffect(() => {
        if (isDateComplete && onChange) {
            const newDateValue = new Date(year, month - 1, day);
            onChange(newDateValue);
        }
    }, [month, day, year]);
    useEffect(() => {
        if (onChange) {
            setDay(dayValue);
            setMonth(monthValue);
            setYear(yearValue);
        }
    }, [dayValue, monthValue, yearValue]);
    return {
        onDayChangeHandler,
        day,
        dayRef,
        onMonthChangeHandler,
        month,
        monthRef,
        onYearChangeHandler,
        year,
        yearRef,
        calendarDate,
        onChangeCalendar,
        disabled,
        validateMinMaxDate,
        isDateComplete,
        isDayValid,
        isMonthValid
    };
}
