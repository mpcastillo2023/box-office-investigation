import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    day: number;
    month: number;
    year: number;
    selectDayHandler: (day: number, month: number, year: number) => void;
    setHoveredDateCell: React.Dispatch<React.SetStateAction<Date | null>>;
    isEndDate?: boolean;
    isStartDate?: boolean;
    isPath: boolean;
    disabled?: boolean;
    customStyles?: CustomStyles;
};
export default function CalendarDayCell({ day, month, year, selectDayHandler, setHoveredDateCell, isEndDate, isStartDate, disabled, isPath, customStyles }: Props): React.JSX.Element;
export {};
