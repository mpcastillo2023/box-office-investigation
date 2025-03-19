import React from "react";
import styles from "../Styles/styles.module.scss";
import { SearchInput } from "@cg-components/SearchInput";
import TableSelect from "./TableSelect/TableSelect";
import TableToggle from "./TableToggle/TableToggle";
export default function Filters({ filters, queryParams, hasSearch, setQueryParams, translations }) {
    const renderFilters = () => {
        return filters?.map((filter, index) => {
            if (filter.type === "Toggle") {
                return (React.createElement(TableToggle, { toggleFilter: filter, queryParams: queryParams, setQueryParams: setQueryParams, key: `${String(filter.queryParam)}-toggle-${index}` }));
            }
            else {
                return (React.createElement(TableSelect, { selectFilter: filter, queryParams: queryParams, setQueryParams: setQueryParams, key: `${String(filter.queryParam)}-select-${index}` }));
            }
        });
    };
    return (React.createElement("div", { className: styles.filterContainer },
        hasSearch ? (React.createElement(SearchInput, { iconPosition: "start", onChange: (searchText) => {
                if (searchText.length > 0) {
                    setQueryParams((prevState) => {
                        return {
                            ...prevState,
                            q: searchText ? searchText : ""
                        };
                    });
                }
                else {
                    setQueryParams((prevState) => {
                        const newState = { ...prevState };
                        delete newState.q;
                        return newState;
                    });
                }
            }, className: styles.searchInput, placeholder: translations.searchPlaceholder, ariaLabel: "table-search" })) : null,
        renderFilters()));
}
