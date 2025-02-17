import React, { ReactNode } from "react";
import { CustomStyles } from "./Types/Types";
type Props = {
    /**
     * The label text to be displayed above the input field.
     * @param {React.ReactNode}
     */
    label?: ReactNode;
    /**
     * The sub-label text to be displayed below the label and above the input field.
     * @param {React.ReactNode}
     */
    subLabel?: ReactNode;
    /**
     * Additional class names to be applied to the component.
     * @param {string}
     */
    className?: string;
    /**
     * Placeholder text for the input field.
     * @param {string}
     */
    placeholder?: string;
    /**
     * The error text to be displayed below the input field when there is an error.
     * @param {string}
     */
    errorText?: string;
    /**
     * Indicates whether there is an error in the input field.
     * @param {boolean}
     */
    isThereError?: boolean;
    /**
     * Icon element to show at the end of the input.
     * @param {ReactNode}
     */
    icon?: ReactNode;
    /**
     * Whether the input can show the password or not
     * @param {boolean}
     */
    togglePassword?: boolean;
    /**
     * Display direction of the component. Column or row
     * @type {"row" | "column"}
     */
    direction?: "row" | "column";
    /**
     * Custom css classes to change styles on every element of the component
     * @type {CustomStyles}
     */
    customStyles?: CustomStyles;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;
declare const PasswordInput: ({ label, subLabel, className, placeholder, errorText, isThereError, icon, togglePassword, direction, customStyles, ...props }: Props) => React.JSX.Element;
export default PasswordInput;
