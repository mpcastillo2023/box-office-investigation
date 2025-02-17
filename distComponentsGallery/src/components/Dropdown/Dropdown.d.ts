import React from "react";
type customStyleClasses = {
    dropdownWrapper?: string;
    dropdownElement?: string;
    dropdownContent?: string;
    overflowDropdownElement?: string;
    overflowBottom?: string;
};
type Props = {
    /**
     * The main element of the dropdown.
     * @param {React.ReactNode}
     */
    dropdownElement: React.ReactNode;
    /**
     * The content to be displayed inside the dropdown.
     * @param {React.ReactNode}
     */
    dropdownContent: React.ReactNode;
    /**
     * Custom icon to be displayed in the collapsed state.
     * @param {React.ReactNode}
     */
    icon?: React.ReactNode;
    /**
     * Custom icon to be displayed in the expanded state.
     * @param {React.ReactNode}
     */
    activeIcon?: React.ReactNode;
    /**
     * Whether to render the icon on the left or not. Defaults to false.
     * @param {boolean}
     */
    iconOnLeft?: boolean;
    /**
     * Custom style classes.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * Whether to set the width of the dropdown content automatically or not. Defaults to false.
     * @param {boolean}
     */
    autowidth?: boolean;
    /**
     * ARIA label attribute for accessibility.
     * @param {string}
     */
    ariaLabel?: string;
    /**
     * Whether the dropdown is disabled or not. Defaults to false.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Whether the dropdown content should be rendered on the center or on the left of the toggle
     * @param {boolean}
     */
    contentShouldCenter?: boolean;
    /**
     * Custom top and bottom position to dropdown content
     * @param {{ top: number; bottom: number }}
     */
    customPosition?: {
        top: number;
        bottom: 0;
    };
    /**
     * Change the background and the label color
     * @param {boolean}
     */
    blueMode?: boolean;
    /**
     * Event toggle dropdown
     * @param {(isOpen: boolean) => void}
     */
    onDropdownToggle?: (isOpen: boolean) => void;
};
/**
 * The Dropdown component provides a customizable dropdown interface, allowing users to select from various options.
 * It offers flexibility in styling, alignment, and behavior, accommodating different use cases and design preferences.
 *
 * @param {Props} props - Props for the Dropdown component.
 * @returns {JSX.Element}
 */
export default function Dropdown({ dropdownElement, dropdownContent, icon, activeIcon, iconOnLeft, customStyle, autowidth, ariaLabel, disabled, contentShouldCenter, customPosition, blueMode, onDropdownToggle }: Props): React.JSX.Element;
export {};
