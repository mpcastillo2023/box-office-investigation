import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    selectDayHandler: (day: number) => void;
    year: number;
    month: number;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    selectedDates: Date | Date[] | undefined;
    customStyles?: CustomStyles;
};
export default function CalendarDays({ selectDayHandler, year, month, disabled, minDate, maxDate, selectedDates, customStyles }: Props): React.JSX.Element;
export {};
