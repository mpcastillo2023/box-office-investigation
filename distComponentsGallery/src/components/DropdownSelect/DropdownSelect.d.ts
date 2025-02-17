import React from "react";
import { customStyleClasses, SelectOption, Translations } from "./Types/Types";
type Props = {
    /**
     * The currently selected value.
     * @param {string | number | boolean}
     */
    value?: string | number | boolean;
    /**
     * List of selectable options.
     * @param {SelectOption[]}
     */
    optionList: SelectOption[];
    /**
     * Placeholder text to be displayed when no option is selected.
     * @param {string}
     */
    placeholder?: string;
    /**
     * Whether to render the icon on the left or not. Defaults to false.
     * @param {boolean}
     */
    iconOnLeft?: boolean;
    /**
     * Custom icon to be displayed in the collapsed state.
     * @param {React.ReactNode}
     */
    icon?: React.ReactNode;
    /**
     * Whether to set the width of the dropdown content automatically or not. Defaults to false.
     * @param {boolean}
     */
    autowidth?: boolean;
    /**
     * Custom icon to be displayed in the expanded state.
     * @param {React.ReactNode}
     */
    activeIcon?: React.ReactNode;
    /**
     * Callback function to be called when an option is selected.
     * @param {(selectedOption: SelectOption) => void}
     */
    onChange?: (selectedOption: SelectOption) => void;
    /**
     * Custom style classes.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * ARIA label attribute for accessibility.
     * @param {string}
     */
    ariaLabel?: string;
    /**
     * Dropdown variant style. Defaults to "primary".
     * @param {"primary" | "empty"}
     */
    variant?: "primary" | "empty";
    /**
     * Dropdown size. Defaults to "auto".
     * @param {"small" | "medium" | "full" | "large" | "auto"}
     */
    size?: "small" | "medium" | "full" | "large" | "auto";
    /**
     * Additional custom className for the component.
     * @param {string}
     */
    className?: string;
    /**
     * Whether the dropdown is disabled or not. Defaults to false.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Whether the dropdown has an error or not. Defaults to false.
     * @param {boolean}
     */
    hasError?: boolean;
    /**
     * Show subtitle on the option list. Defaults to false.
     * @param {boolean}
     */
    withSubtitle?: boolean;
    /**
     * Translations for customizable text within the component.
     * @param {Translations}
     */
    translations?: Translations;
};
/**
 * The DropdownSelect component provides a customizable dropdown select interface, allowing users to select from a list of options.
 * It can be configured with different sizes, styles, and behaviors, and it includes optional labeling, error handling, and more.
 *
 * @param {Props} props - Props for the DropdownSelect component.
 * @returns {JSX.Element}
 */
export default function DropdownSelect({ value, optionList, placeholder, iconOnLeft, icon, activeIcon, onChange, customStyle, ariaLabel, variant, size, className, disabled, hasError, autowidth, withSubtitle, translations }: Props): React.JSX.Element;
export {};
