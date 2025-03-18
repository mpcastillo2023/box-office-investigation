import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    selectDayHandler: (day: number, month: number, year: number) => void;
    year: number;
    month: number;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    startDate?: Date | null;
    endDate?: Date | null;
    hoveredDateCell: Date | null;
    setHoveredDateCell: React.Dispatch<React.SetStateAction<Date | null>>;
    customStyles?: CustomStyles;
};
export default function CalendarDays({ selectDayHandler, year, month, disabled, minDate, maxDate, startDate, endDate, hoveredDateCell, setHoveredDateCell, customStyles }: Props): React.JSX.Element;
export {};
