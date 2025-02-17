import React from "react";
import { Column, TableFilters, Translations } from "./Types/Types";
type Props = {
    /**
     * Total number of pages
     * @param {number}
     */
    totalPages: number;
    /**
     * Boolean indicating whether the data is currently being fetched.
     * @param {boolean}
     */
    isFetching: boolean;
    /**
     * Data to be displayed in the table.
     * @param {object[]}
     */
    displayData?: object[];
    /**
     * Columns configuration for the table.
     * @param {Column[]}
     */
    columns: Column[];
    /**
     * Current page number.
     * @param {number}
     */
    page: number;
    /**
     * Number of rows per page.
     * @param {number}
     */
    rowsPerPage: number;
    /**
     * Boolean indicating whether the search functionality is enabled.
     * @param {boolean}
     */
    hasSearch?: boolean;
    /**
     * Filters configuration for the table.
     * @param {TableFilters}
     */
    filters?: TableFilters;
    /**
     * Query parameters for filtering, sorting, and pagination.
     * @param {Record<string, number | string | boolean>}
     */
    queryParams: Record<string, number | string | boolean>;
    /**
     * Function to set query parameters.
     * @param {React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>}
     */
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    /**
     * Translations for customizable text within the component.
     * @param {Translations}
     */
    translations?: Translations;
    /**
     * A tag displayed beside the table.
     * @param {string}
     */
    tagText?: string | React.ReactNode;
    /**
     * Sets if the initial page of the table is 0 or 1
     * @param {boolean}
     */
    initialPageIsZero?: boolean;
    /**
     * Number of total items result
     * @param {number}
     */
    totalItems: number;
    /**
     * A callback that is called when pressing the download button
     * @param {() => void}
     */
    downloadCallBack?: () => void;
    /**
     * Mobile accordion title, specify a key based on the columns name provided.
     * @type {string}
     */
    mobileAccordionColumnKey: string | number | symbol;
};
export default function ServerTable({ totalPages, setQueryParams, isFetching, displayData, columns, page, rowsPerPage, hasSearch, filters, queryParams, translations, tagText, initialPageIsZero, totalItems, downloadCallBack, mobileAccordionColumnKey }: Props): React.JSX.Element;
export {};
