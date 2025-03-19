/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
const UseWeekDaysSelect = ({ onChange, value }) => {
    const [days, setDays] = useState(value || []);
    const handleSelectedDays = (dayIndex) => {
        if (onChange) {
            const valueNotEmpty = value ? value : [];
            const selectedDayIndex = valueNotEmpty.indexOf(dayIndex);
            if (selectedDayIndex > -1) {
                const newDays = [...valueNotEmpty];
                newDays.splice(selectedDayIndex, 1);
                onChange(newDays);
            }
            else {
                const newDays = [...valueNotEmpty, dayIndex];
                onChange(newDays);
            }
        }
        else {
            const selectedDayIndex = days.indexOf(dayIndex);
            if (selectedDayIndex > -1) {
                setDays((prevDays) => {
                    const newDays = [...prevDays].splice(selectedDayIndex, 1);
                    return newDays;
                });
            }
            else {
                setDays((prevDays) => [...prevDays, dayIndex]);
            }
        }
    };
    return {
        handleSelectedDays,
        value: value ? value : days
    };
};
export default UseWeekDaysSelect;
