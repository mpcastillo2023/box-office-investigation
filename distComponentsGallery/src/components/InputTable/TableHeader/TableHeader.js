import React from "react";
import styles from "../Styles/styles.module.scss";
import Button from "@cg-components/Button/Button";
export default function TableHeader(props) {
    const { columns, withActionColumn, customStyle } = props;
    const columnWidth = withActionColumn
        ? 100 / (columns.length + 1)
        : 100 / columns.length;
    const actionCol = withActionColumn
        ? [
            React.createElement("th", { className: `${styles.headerCell} ${customStyle?.headerCell || ""}`, key: `${props.actionColumnText}-${columns.length}`, style: {
                    width: `${columnWidth}%`
                } },
                React.createElement(Button, { "data-testid": `headcol-${columns.length}`, className: `${styles.columnHeaderButton} ${styles.center}` }, props.actionColumnText))
        ]
        : [];
    const headerCols = columns.map((column, index) => {
        const columnTitle = column.label;
        const alignment = column.alignment || "left";
        const alignCssClass = alignment ? styles[alignment] : "";
        return (React.createElement("th", { className: `${styles.headerCell} ${customStyle?.headerCell || ""}`, key: `${column.label}-${index}`, style: {
                width: `${columnWidth}%`
            } },
            React.createElement(Button, { "data-testid": `headcol-${index}`, className: `${styles.columnHeaderButton} ${alignCssClass} ${customStyle?.columnHeaderButton || ""}` }, columnTitle)));
    });
    return (React.createElement("thead", null,
        React.createElement("tr", null, [...headerCols, ...actionCol])));
}
