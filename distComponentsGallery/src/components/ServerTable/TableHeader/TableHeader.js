import React from "react";
import styles from "../Styles/styles.module.scss";
import Button from "@cg-components/Button/Button";
import ArrowUp from "@cg-icons/ChevronUp.svg";
import ArrowDown from "@cg-icons/ChevronDown.svg";
export default function TableHeader({ columns, queryParams, setQueryParams, tHeadRef }) {
    const headerRow = columns.map((column, index) => {
        const columnTitle = column.label;
        const alignment = column.alignment || "left";
        const alignCssClass = alignment ? styles[alignment] : "";
        const sortIcon = queryParams.sortDir === "ASC" ? React.createElement(ArrowUp, null) : React.createElement(ArrowDown, null);
        const columnWidth = column?.options?.width ? column.options.width : "";
        return (React.createElement("th", { className: `${styles.headerCell}`, key: `${column.label}-${index}`, style: {
                width: columnWidth
            } },
            React.createElement(Button, { "data-testid": `headcol-${index}`, className: `${styles.columnHeaderButton} ${alignCssClass}`, onClick: () => {
                    if (column?.options?.sort) {
                        setQueryParams((prevState) => {
                            const isColumnSortedDesc = column.name === queryParams.sortField &&
                                prevState.sortDir === "DESC";
                            const newDirection = isColumnSortedDesc ? "ASC" : "DESC";
                            return {
                                ...prevState,
                                sortDir: newDirection,
                                sortField: column.name
                            };
                        });
                    }
                } },
                columnTitle,
                queryParams.sortField === column.name ? sortIcon : null)));
    });
    return (React.createElement("thead", { ref: tHeadRef },
        React.createElement("tr", null, headerRow)));
}
