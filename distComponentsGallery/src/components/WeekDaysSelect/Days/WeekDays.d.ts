import React from "react";
import { FullDaysOptions } from "../Types/Types";
type Props = {
    filteredOptions: FullDaysOptions[];
    handleSelectedDays: (dayIndex: number) => void;
    disabled?: boolean;
    value: number[];
};
export default function WeekDays({ filteredOptions, handleSelectedDays, disabled, value }: Props): React.JSX.Element;
export {};
