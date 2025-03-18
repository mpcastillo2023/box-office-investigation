import React from "react";
import { CustomStyles } from "../Types/Types";
type Props = {
    currentLocale: Intl.LocalesArgument;
    customStyles?: CustomStyles;
};
export default function CalendarWeekDays({ currentLocale, customStyles }: Props): React.JSX.Element;
export {};
