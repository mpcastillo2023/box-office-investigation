import React from "react";
type CustomStyles = {
    customCalendarInputContainer?: string;
};
type Props = {
    onChange?: (date: Date) => void;
    value?: Date | string;
    disabled?: boolean;
    isCalendarAbsolute?: boolean;
    minDate?: Date;
    maxDate?: Date;
    ariaLabel?: string;
    customClassName?: string;
    customStyles?: CustomStyles;
    onCalendarOpen?: (isOpen: boolean) => void;
};
export default function CalendarInput({ onChange, value, disabled, minDate, maxDate, ariaLabel, customClassName, customStyles, onCalendarOpen }: Props): React.JSX.Element;
export {};
