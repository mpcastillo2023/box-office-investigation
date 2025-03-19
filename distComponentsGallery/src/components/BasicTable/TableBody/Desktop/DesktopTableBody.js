import React from "react";
import styles from "../../Styles/styles.module.scss";
import objectHasProperty from "@cg-utils/objectHasProperty";
export default function DesktopTableBody({ columns, displayData, customStyle, onMouseEnterCallback, onMouseLeaveCallback, onClickCellHandler }) {
    const renderRow = (item, rowIndex) => {
        const row = columns.map((column, colIndex) => {
            const field = column.name;
            const alignment = column.alignment || "left";
            const alignCssClass = alignment ? styles[alignment] : "";
            const customCssClassKey = "customCellCssClass";
            const customCssClass = objectHasProperty(item, customCssClassKey)
                ? item[customCssClassKey]
                : "";
            return (React.createElement("td", { key: `${column}-${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.cell} ${alignCssClass} ${customStyle?.cell || ""} ${customCssClass || ""}`, onClick: () => {
                    if (onClickCellHandler)
                        onClickCellHandler(item);
                }, onMouseEnter: onMouseEnterCallback
                    ? () => {
                        onMouseEnterCallback(rowIndex, colIndex);
                    }
                    : undefined, onMouseLeave: onMouseLeaveCallback
                    ? () => {
                        onMouseLeaveCallback(rowIndex, colIndex);
                    }
                    : undefined }, item[field]));
        });
        return row;
    };
    const renderRows = () => displayData?.map((item, rowIndex) => {
        return (React.createElement("tr", { className: `${styles.cellRow} ${customStyle?.cellRow || ""}`, key: `${rowIndex}`, "data-testid": `table-body-row-${rowIndex}` }, renderRow(item, rowIndex)));
    });
    return React.createElement("tbody", null, renderRows());
}
