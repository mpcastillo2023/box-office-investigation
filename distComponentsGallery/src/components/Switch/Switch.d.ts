import React from "react";
import { customStyleClasses } from "./Types";
type Props = {
    /**
     * Initial value for the switch, true for checked and false for unchecked.
     * @param {boolean}
     */
    value?: boolean;
    /**
     * Icon to be displayed when the switch is checked.
     * @param {React.ReactNode}
     */
    handlerIconChecked?: React.ReactNode;
    /**
     * Icon to be displayed when the switch is unchecked.
     * @param {React.ReactNode}
     */
    handlerIconUnchecked?: React.ReactNode;
    /**
     * Function to call when the switch's state changes.
     * @param {(value: boolean) => void}
     */
    onChange?: (value: boolean) => void;
    /**
     * Custom styling classes for various parts of the switch.
     * @param {customStyleClasses}
     */
    customStyles?: customStyleClasses;
    /**
     * Size of the switch, can be "medium", "small" or "extraSmall".
     * @param { "medium" | "small"}
     */
    size?: "medium" | "small" | "extraSmall";
    /**
     * If true, the switch is disabled and cannot be clicked.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * A label for assistive technologies such as screen readers.
     * @param {string}
     */
    ariaLabel?: string;
    /**
     * Label displayed beside switch
     * @param {string | React.ReactNode | null}
     */
    textBeside?: string | React.ReactNode | null;
};
/**
 * Switch component provides a toggle button with customizable styles and behaviors.
 * It allows for displaying labels, sub-labels, and different icons for the checked and unchecked states.
 *
 * @param {Props} props - Props for the Switch component.
 * @returns {JSX.Element}
 */
export default function Switch({ value, handlerIconChecked, handlerIconUnchecked, onChange, customStyles, size, disabled, ariaLabel, textBeside }: Props): React.JSX.Element;
export {};
