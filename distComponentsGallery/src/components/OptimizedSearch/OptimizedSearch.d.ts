import React from "react";
import { MenuItem } from "..";
type Props = {
    /**
     * Data to search and filter
     * @param {MenuItem[]}
     */
    data: MenuItem[];
    /**
     * Placeholder text for the input field.
     * @param {string}
     */
    placeholder: string;
    /**
     * Display result text if there is not result data.
     * @param {string}
     */
    notResultsText: string;
    /**
     * Css className to changed styles.
     * @param {string}
     */
    className?: string;
    /**
     * Focus on render
     * @param {boolean}
     */
    focusOnRender?: boolean;
    /**
     * Placeholder text for the input field.
     * @param {React.ReactNode}
     */
    customPlaceholder?: React.ReactNode;
    /**
     * Css className to changed styles.
     * @param {string}
     */
    searchInputClass?: string;
};
/**
 * Optimized search input component provides an input field for search functionality.
 * Used to search Menu items
 * @param {Props} props - Props for the OptimizedSearch component.
 * @returns {JSX.Element}
 */
export default function OptimizedSearch({ placeholder, notResultsText, data, className, focusOnRender, customPlaceholder, searchInputClass }: Props): JSX.Element;
export {};
