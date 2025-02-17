import React from "react";
type CustomStyles = {
    customLabelContainer?: string;
    customCheckboxWrapper?: string;
    customCheckboxContainer?: string;
    customSize?: string;
};
type Props = {
    /**
     * The visual style variant of the checkbox.
     * @optional
     */
    variant?: "primary";
    /**
     * The initial value of the checkbox.
     * @default false
     */
    value?: boolean;
    /**
     * Status text to represent both status of the switch.
     * @type {string | React.ReactNode}
     */
    textBeside?: string | React.ReactNode;
    /**
     * Callback function invoked when the checkbox value changes.
     * @param value - The new value of the checkbox.
     * @optional
     */
    onChange?: (value: boolean) => void;
    /**
     * The size of the checkbox.
     * @default "medium"
     */
    size?: "big" | "medium" | "small";
    /**
     * Whether the checkbox is disabled or not.
     * @default false
     */
    disabled?: boolean;
    /**
     * An aria-label attribute to provide accessibility.
     * @optional
     */
    ariaLabel?: string;
    /**
     * className o change styles on checkbox.
     * @optional
     */
    className?: string;
    /**
     * custom css class to change specific parts of the component.
     *  @type {CustomStyles}
     */
    customStyles?: CustomStyles;
    /**
     * Display direction of the component. Column or row
     * @type {"row" | "column"}
     */
    direction?: "row" | "column";
};
/**
 * The Checkbox component renders a customizable checkbox input along with an optional label and sublabel.
 * It allows for different visual styles, sizes, and positions for the label, and provides support for a controlled
 * or uncontrolled checkbox state. The component also includes support for disabled state and accessibility attributes.
 *
 * @param {Props} props - Props for the Checkbox component.
 * @returns {JSX.Element}
 */
export default function Checkbox(props: Props): React.JSX.Element;
export {};
