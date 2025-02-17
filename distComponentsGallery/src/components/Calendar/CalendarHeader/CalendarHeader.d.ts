import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    prevMonthHandler: () => void;
    prevYearHandler: () => void;
    nextMonthHandler: () => void;
    nextYearHandler: () => void;
    currentLocale: string;
    year: number;
    month: number;
    disabled?: boolean;
    shouldRenderYearButtons?: boolean;
    customStyles?: CustomStyles;
};
export default function CalendarHeader({ prevMonthHandler, nextMonthHandler, prevYearHandler, nextYearHandler, currentLocale, year, month, shouldRenderYearButtons, customStyles }: Props): React.JSX.Element;
export {};
