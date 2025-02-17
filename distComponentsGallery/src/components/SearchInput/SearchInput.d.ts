import React, { InputHTMLAttributes } from "react";
type SearchInputProps = {
    /**
     * Placeholder text for the input field.
     * @param {string}
     */
    placeholder?: string;
    /**
     * Placeholder text for the input field.
     * @param {React.ReactNode}
     */
    customPlaceholder?: React.ReactNode;
    /**
     * Additional class names to be applied to the component.
     * @param {string}
     */
    className?: string;
    /**
     * Function called when the input value changes.
     * @param {(value: string) => void}
     */
    onChange?: (value: string) => void;
    /**
     * Boolean indicating whether the input field is disabled.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Boolean indicating whether debouncing is applied to the onChange event.
     * @param {boolean}
     */
    debounce?: boolean;
    /**
     * Default value for the input field.
     * @param {string}
     */
    defaultValue?: string;
    /**
     * Value for the input field.
     * @param {string}
     */
    value?: string;
    /**
     * Position of the search icon, either at the start or final position of the input field.
     * @param {"start" | "final"}
     */
    iconPosition?: "start" | "final";
    /**
     * Should it display the clear button beside the search input
     * @param {boolean}
     */
    hasClearButton?: boolean;
    /**
     * An option ref for the search input
     * @param {React.RefObject<HTMLInputElement>}
     */
    searchRef?: React.RefObject<HTMLInputElement>;
    /**
     * An option ref for the search input
     * @param {React.RefObject<HTMLInputElement>}
     */
    searchContainerRef?: React.LegacyRef<HTMLFormElement>;
    /**
     * An aria label for the input element
     * @param {string}
     */
    ariaLabel?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;
/**
 * SearchInput component provides an input field for search functionality.
 * It supports custom placeholder text, styling, debouncing, and search icon placement.
 * An optional debounce delay can be applied to trigger the onChange event after typing is finished.
 *
 * @param {SearchInputProps} props - Props for the SearchInput component.
 * @returns {JSX.Element}
 */
declare const SearchInput: (props: SearchInputProps) => React.JSX.Element;
export default SearchInput;
