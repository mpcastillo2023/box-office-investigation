import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    day: number;
    month: number;
    year: number;
    selectDayHandler: (day: number) => void;
    isActive?: boolean;
    disabled?: boolean;
    customStyles?: CustomStyles;
};
export default function CalendarDayCell({ day, month, year, selectDayHandler, isActive, disabled, customStyles }: Props): React.JSX.Element;
export {};
