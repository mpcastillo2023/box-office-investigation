import React from "react";
import styles from "../Styles/styles.module.scss";
import Button from "@cg-components/Button/Button";
export default function TableHeader({ columns, variant, customStyle }) {
    const headerRow = columns.map((column, index) => {
        const columnTitle = column.label;
        const alignment = column.alignment || "left";
        const alignCssClass = alignment ? styles[alignment] : "";
        const variantCssClass = variant ? styles[variant] : "";
        return (React.createElement("th", { className: `${styles.headerCell} ${variantCssClass} ${customStyle?.headerCell}`, key: `${column.label}-${index}` },
            React.createElement(Button, { "data-testid": `headcol-${index}`, className: `${styles.columnHeaderButton} ${alignCssClass} ${customStyle?.columnHeaderButton || ""}` }, columnTitle)));
    });
    return (React.createElement("thead", null,
        React.createElement("tr", null, headerRow)));
}
