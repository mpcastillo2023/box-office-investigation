import React, { RefCallback } from "react";
import { CustomStyles } from "./Types/Types";
type Props = {
    /**
     * Label displayed on the left of the input.
     * @param {string | React.ReactNode}
     */
    textBeside?: string | React.ReactNode;
    /**
     * Variant for styling the input. Currently supports "basic".
     * @param {"basic"}
     */
    variant?: "basic";
    /**
     * If true, applies error styling to the input.
     * @param {boolean}
     */
    isThereError?: boolean;
    /**
     * Reference callback for the input element.
     * @param {RefCallback<HTMLInputElement>}
     */
    refCallback?: RefCallback<HTMLInputElement>;
    /**
     * Callback function called when the value changes.
     * @param {(value: number | string) => void}
     */
    onChange?: (value: number | string) => void;
    /**
     * Add custom styles
     * @param {CustomStyles}
     */
    customStyles?: CustomStyles;
    /**
     * Display direction of the component. Column or row
     * @param {"row" | "column"}
     */
    direction?: "row" | "column";
    /**
     * Value to be used in numberInput
     * @param {string | number}
     */
    value?: string | number;
    maxValue?: number;
};
/**
 * NumberInput component is a controlled input component that allows users to increase or decrease numeric values using buttons.
 * It supports different variants, and additional properties such as title, subtitle, and error handling.
 *
 * @param {Props} props - Props for the NumberInput component.
 * @returns {JSX.Element}
 */
declare const NumberInput: ({ textBeside, variant, isThereError, className, refCallback, onChange, customStyles, maxValue, ...props }: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "title" | "value">) => React.JSX.Element;
export default NumberInput;
