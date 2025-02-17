import { ReactNode } from "react";
import { FullDaysOptions } from "./Types/Types";
type Props = {
    /**
     * Disabled the component
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * An aria-label to represent aria label
     * @param {string}
     */
    ariaLabel?: string;
    /**
     * Icon representing un-open button select
     * @param {ReactNode}
     */
    icon?: ReactNode;
    /**
     * activeIcon representing open button select
     * @param {ReactNode}
     */
    activeIcon?: ReactNode;
    /**
     * ClassName to change styles
     * @param {string}
     */
    className?: string;
    /**
     * Whether the component change styles if there errors
     * @param {string}
     */
    hasError?: boolean;
    /**
     * An array of numbers representing days of the week from 1 to 7
     * @param {number[]}
     */
    value?: number[];
    /**
     * onChange function to change day value
     * @param {(value: number[]) => void}
     */
    onChange?: (value: number[]) => void;
    /**
     * Array of objects representing:
     *  optionText: Monday;
        optionValue: mon;
        weekDay: 1;
        checked: true;
  
     * @param {FullDaysOptions[]}
     */
    options: FullDaysOptions[];
    /**
     * Object showing a custom message for three combinations:
     *  ["1, 7"]: "Fines de semana",
        ["2, 3, 4, 5, 6"]: "Entre semana",
        ["1, 2, 3, 4, 5, 6, 7"]: "Todos los días"
     * @param {Record<string, string>}
     */
    weekDaysOrderMessage?: Record<string, string>;
    /**
     * A custom message showing if there is not day selected
     * @param {string}
     */
    noDaysSelectedMessage?: string;
    /**
     * Display if week days select is required.
     * @param {string}
     */
    required?: boolean;
};
/**
 * WeekDaysSelect component represents a week of the days that allows users to check on days,
 * and those clicked days are displayed and the user can toggle days.
 *
 * @param {Props} props - Props for the WeekDaysButtons component.
 * @returns {JSX.Element}
 */
declare const WeekDaysSelect: ({ icon, activeIcon, className, disabled, ariaLabel, noDaysSelectedMessage, weekDaysOrderMessage, options, ...props }: Props) => JSX.Element;
export default WeekDaysSelect;
