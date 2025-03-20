import React from "react";
import styles from "../Styles/styles.module.scss";
export default function DesktopTableBody({ columns, displayData, translations, tBodyRef, onClickCellHandler, customStyles }) {
    console.log(customStyles);
    const renderRow = (item, rowIndex) => {
        const row = columns.map((column, colIndex) => {
            const field = column.name;
            const alignment = column.alignment || "left";
            const alignCssClass = alignment ? styles[alignment] : "";
            return (React.createElement("td", { key: `${column}-${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.cell} ${customStyles?.cell || ""} ${alignCssClass} `, onClick: () => {
                    if (onClickCellHandler) {
                        onClickCellHandler(item);
                    }
                } }, item[field]));
        });
        return row;
    };
    const renderRows = () => displayData?.map((item, rowIndex) => {
        return (React.createElement("tr", { className: `${styles.cellRow}`, key: `${rowIndex}`, "data-testid": `table-body-row-${rowIndex}` }, renderRow(item, rowIndex)));
    });
    if (!displayData || displayData.length < 1)
        return (React.createElement("tbody", { className: `${styles.bodyContainer} ${customStyles?.bodyContainer || ""}` },
            React.createElement("tr", null,
                React.createElement("td", { className: styles.notFoundText, colSpan: 5 }, translations.notFound))));
    return (React.createElement("tbody", { className: `${styles.bodyContainer} ${customStyles?.bodyContainer || ""}`, ref: tBodyRef }, renderRows()));
}
