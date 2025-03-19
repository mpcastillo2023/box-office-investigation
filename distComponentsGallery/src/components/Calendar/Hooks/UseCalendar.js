import { useState } from "react";
export default function UseCalendar({ onChange, value, disabled, withMultipleDate }) {
    const parsedValue = Array.isArray(value)
        ? value.length > 0
            ? value[value.length - 1]
            : undefined
        : value;
    const defaultDate = parsedValue ? parsedValue : new Date();
    const currentLocale = "es";
    const [selectedDates, setSelectedDates] = useState(value);
    const [year, setYear] = useState(defaultDate.getFullYear());
    const [month, setMonth] = useState(defaultDate.getMonth());
    const [day, setDay] = useState(defaultDate.getDate());
    const selectDayHandler = (day) => {
        const createNewValues = (value) => {
            const newDate = new Date(year, month, day);
            if (value) {
                const isRepeated = value.find((selectedDate) => selectedDate.getTime() === newDate.getTime());
                if (isRepeated) {
                    const newValues = value.filter((selectedDate) => selectedDate.getTime() !== newDate.getTime());
                    return newValues;
                }
                else {
                    const newValues = value ? [...value, newDate] : [newDate];
                    return newValues;
                }
            }
            else {
                return [newDate];
            }
        };
        if (!disabled) {
            setDay(day);
            if (withMultipleDate) {
                if (onChange) {
                    const newValues = createNewValues(value);
                    onChange(newValues);
                }
                else {
                    setSelectedDates((prevState) => {
                        const newValues = createNewValues(prevState);
                        return newValues;
                    });
                }
            }
            else {
                if (onChange) {
                    onChange(new Date(year, month, day));
                }
                else {
                    setSelectedDates(new Date(year, month, day));
                }
            }
        }
    };
    const nextMonthHandler = () => {
        if (!disabled) {
            if (month > 10) {
                setMonth(0);
                setYear((prevState) => {
                    return prevState + 1;
                });
            }
            else {
                setMonth((prevState) => {
                    return prevState + 1;
                });
            }
            setDay(undefined);
        }
    };
    const nextYearHandler = () => {
        if (!disabled) {
            setYear((prevState) => {
                return prevState + 1;
            });
            setDay(undefined);
        }
    };
    const prevYearHandler = () => {
        if (!disabled) {
            setYear((prevState) => {
                return prevState - 1;
            });
            setDay(undefined);
        }
    };
    const prevMonthHandler = () => {
        if (!disabled) {
            if (month < 1) {
                setMonth(11);
                setYear((prevState) => {
                    return prevState - 1;
                });
            }
            else {
                setMonth((prevState) => {
                    return prevState - 1;
                });
            }
            setDay(undefined);
        }
    };
    return {
        day,
        month,
        year,
        currentLocale,
        selectDayHandler,
        nextMonthHandler,
        prevMonthHandler,
        nextYearHandler,
        prevYearHandler,
        selectedDates: value ? value : selectedDates
    };
}
