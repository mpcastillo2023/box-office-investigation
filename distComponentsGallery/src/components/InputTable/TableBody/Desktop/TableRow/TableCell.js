import React from "react";
import styles from "../../../Styles/styles.module.scss";
import TableCellInput from "./Input/TableCellInput";
import objectHasProperty from "@cg-utils/objectHasProperty";
export default function TableCell(props) {
    const { column, activeIndex, colIndex, rowIndex, withActionColumn, item, isValidCellCallback, customStyle, onMouseEnterCallback, onMouseLeaveCallback } = props;
    const field = column.name;
    const alignment = column.alignment || "left";
    const alignCssClass = alignment ? styles[alignment] : "";
    const cellIcon = column.cellsInputIcon ? column.cellsInputIcon : "";
    const cellValue = item[field];
    const isInput = typeof cellValue === "boolean" ||
        typeof cellValue === "string" ||
        typeof cellValue === "number";
    const isValid = isValidCellCallback && isInput
        ? isValidCellCallback(field, cellValue)
        : true;
    const isValidBackground = isValid ? "" : styles.invalidBackground;
    const dirtyBackground = objectHasProperty(item, "isTableInputCellDirty") &&
        item["isTableInputCellDirty"]
        ? styles.dirtyBackground
        : "";
    return (React.createElement("td", { key: `${column}-${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.cell} ${alignCssClass} ${isValidBackground} ${dirtyBackground} ${customStyle?.cell || ""} ${item?.customCellCssClass || ""}`, onMouseEnter: onMouseEnterCallback
            ? () => {
                onMouseEnterCallback(rowIndex, colIndex);
            }
            : undefined, onMouseLeave: onMouseLeaveCallback
            ? () => {
                onMouseLeaveCallback(rowIndex, colIndex);
            }
            : undefined }, (activeIndex === rowIndex || !withActionColumn) &&
        !column.disabled &&
        isInput ? (React.createElement(TableCellInput, { customStyle: customStyle, alignment: alignment, ...props, cellValue: cellValue, cellIcon: cellIcon })) : (item[field])));
}
