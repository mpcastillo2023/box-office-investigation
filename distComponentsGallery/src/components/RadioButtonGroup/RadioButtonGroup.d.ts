import React from "react";
import { CustomStyleClasses, RadioButtonOption } from "./Types/types";
type Props = {
    /**
     * Options for the radio buttons, including the text label and underlying value.
     * @param {RadioButtonOption[]}
     */
    options: RadioButtonOption[];
    /**
     * Boolean indicating whether the entire group of radio buttons is disabled.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Function called when a radio button within the group is selected.
     * @param {(value: string) => void}
     */
    onChange?: (value: string | boolean) => void;
    /**
     * The value of the currently selected radio button within the group.
     * @param {string}
     */
    value?: string | boolean;
    /**
     * ARIA label for accessibility purposes.
     * @param {string}
     */
    ariaLabel?: string;
    /**
     * The 'name' attribute applied to each radio button within the group.
     * @param {string}
     */
    name: string;
    /**
     * The display in which the radio buttons will be displayed. Defaults to column
     * @param {string}
     */
    display?: "column" | "row";
    customStyles?: CustomStyleClasses;
};
/**
 * RadioButtonGroup component allows users to select a single option from a group of options.
 * It renders a group of radio buttons with a title and supports custom option values, disabling the entire group, and other accessibility features.
 *
 * @param {Props} props - Props for the RadioButtonGroup component.
 * @returns {JSX.Element}
 */
export default function RadioButtonGroup({ options, disabled, value, onChange, ariaLabel, name, customStyles }: Props): React.JSX.Element;
export {};
