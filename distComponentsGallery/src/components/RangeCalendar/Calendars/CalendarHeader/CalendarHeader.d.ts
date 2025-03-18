import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    prevMonthHandler?: () => void;
    currentMonthHandler?: () => void;
    nextMonthHandler?: () => void;
    lastMonthHandler?: () => void;
    currentLocale: Intl.LocalesArgument;
    year: number;
    month: number;
    disabled?: boolean;
    customStyles?: CustomStyles;
};
export default function CalendarHeader({ prevMonthHandler, nextMonthHandler, currentMonthHandler, lastMonthHandler, currentLocale, year, month, customStyles }: Props): React.JSX.Element;
export {};
