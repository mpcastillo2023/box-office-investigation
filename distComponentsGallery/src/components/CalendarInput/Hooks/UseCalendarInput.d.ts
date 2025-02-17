import React from "react";
type Props = {
    onChange?: (date: Date) => void;
    value?: Date;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
};
export default function UseCalendarInput({ onChange, value, disabled, minDate, maxDate }: Props): {
    onDayChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    day: number | "";
    dayRef: React.RefObject<HTMLInputElement>;
    onMonthChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    month: number | "";
    monthRef: React.RefObject<HTMLInputElement>;
    onYearChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    year: number | "";
    yearRef: React.RefObject<HTMLInputElement>;
    calendarDate: Date | undefined;
    onChangeCalendar: (date: Date) => void;
    disabled: boolean | undefined;
    validateMinMaxDate: (possibleDate?: Date) => void;
    isDateComplete: boolean;
    isDayValid: boolean;
    isMonthValid: boolean;
};
export {};
