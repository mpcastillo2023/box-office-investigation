import React from "react";
import styles from "../../../Styles/styles.module.scss";
import TableCellInput from "./Input/TableCellInput";
export default function TableCard(props) {
    const { column, activeIndex, colIndex, rowIndex, withActionColumn, item } = props;
    const field = column.name;
    const cellValue = item[field];
    const isInput = typeof cellValue === "boolean" ||
        typeof cellValue === "string" ||
        typeof cellValue === "number";
    return (React.createElement("div", { key: `${column}-${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.mobileFields}` },
        React.createElement("div", { className: styles.mobileFieldName }, column.label),
        React.createElement("div", { className: styles.mobileFieldInput }, (activeIndex === rowIndex || !withActionColumn) &&
            !column.disabled &&
            isInput ? (React.createElement(TableCellInput, { ...props, cellValue: cellValue })) : (item[field]))));
}
