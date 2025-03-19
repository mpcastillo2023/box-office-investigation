import React from "react";
import styles from "../../../../Styles/styles.module.scss";
import Checkbox from "@cg-components/Checkbox/Checkbox";
export default function TableCellInput({ column, colIndex, rowIndex, onChangeCellHandler, disabled, cellValue, withCellBackground = true, alignment, customStyle, cellIcon = null, numberFormatCallBack }) {
    const field = column.name;
    const isTextInput = column.cellType === "string";
    const withBackground = withCellBackground ? styles.withBackground : "";
    const alignClass = alignment !== "left"
        ? alignment === "center"
            ? styles.centerAlign
            : styles.rightAlign
        : "";
    return (React.createElement(React.Fragment, null, typeof cellValue === "boolean" ? (React.createElement(Checkbox, { value: cellValue, onChange: (value) => onChangeCellHandler(value, rowIndex, field), disabled: disabled })) : (React.createElement("div", { className: `${styles.inputCellContainer} ${alignClass} ${customStyle?.inputCellContainer || ""}` },
        React.createElement("input", { value: !isTextInput && numberFormatCallBack
                ? numberFormatCallBack(cellValue, rowIndex, colIndex)
                : cellValue, style: { textAlign: alignment }, type: "text", onChange: (e) => {
                const value = e.target.value;
                if (isTextInput) {
                    onChangeCellHandler(value, rowIndex, field);
                }
                else {
                    if (/^\s*[+-]?(\d+([,.\s]\d{3})*)([.,]\d*)?\s*$/.test(value) ||
                        value === "") {
                        onChangeCellHandler(e.target.value, rowIndex, field);
                    }
                }
            }, className: `${styles.inputCell} ${withBackground} ${customStyle?.inputCell || ""} ${customStyle?.withBackground || ""}`, "data-testid": `table-input-cell-${colIndex}-${rowIndex}`, "aria-label": `table-input-cell-${colIndex}-${rowIndex}`, disabled: disabled }),
        cellIcon))));
}
