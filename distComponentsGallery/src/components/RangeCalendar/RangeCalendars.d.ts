import React from "react";
type Props = {
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onChangeStartDate?: (date: Date | null) => void;
    onChangeEndDate?: (date: Date | null) => void;
    startDate?: Date | null;
    endDate?: Date | null;
    startTime?: string | null;
    endTime?: string | null;
    onChangeStartTime?: (startTime: string) => void;
    onChangeEndTime?: (endTime: string) => void;
    withTime?: boolean;
    areTimeInputsEnabled?: boolean;
    currentLocale?: Intl.LocalesArgument;
    placeholder?: string;
    translations?: Translations;
    ariaLabel?: string;
};
export type Translations = {
    to?: string;
    start?: string;
    end?: string;
    at?: string;
    save?: string;
    changeTime?: string;
};
export default function RangeCalendar(props: Props): React.JSX.Element;
export {};
