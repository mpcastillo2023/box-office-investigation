import React from "react";
type customStyleClasses = {
    inputContainer?: string;
    input?: string;
};
type Props = {
    onChange?: (date: Date) => void;
    value?: Date | string;
    defaultValue?: Date;
    disabled?: boolean;
    isCalendarAbsolute?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onCalendarOpen?: (isOpen: boolean) => void;
    customStyle?: customStyleClasses;
    ariaLabel?: string;
};
export default function CalendarDropdown({ onChange, value, disabled, minDate, maxDate, customStyle, defaultValue, ariaLabel }: Props): React.JSX.Element;
export {};
