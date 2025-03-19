import React from "react";
import styles from "../../../../Styles/styles.module.scss";
import Checkbox from "@cg-components/Checkbox/Checkbox";
export default function TableCellInput({ column, colIndex, rowIndex, displayData, onChangeCellHandler, disabled, cellValue }) {
    const field = column.name;
    const isTextInput = typeof displayData[rowIndex][field] === "string";
    return (React.createElement(React.Fragment, null, typeof cellValue === "boolean" ? (React.createElement(Checkbox, { value: cellValue, onChange: (value) => onChangeCellHandler(value, rowIndex, field), disabled: disabled, customStyles: styles })) : (React.createElement("input", { value: cellValue, type: isTextInput ? "text" : "number", onChange: (e) => {
            const value = isTextInput
                ? e.target.value
                : parseInt(e.target.value);
            onChangeCellHandler(value, rowIndex, field);
        }, className: `${styles.inputCell}`, "data-testid": `table-input-cell-${colIndex}-${rowIndex}`, "aria-label": `table-input-cell-${colIndex}-${rowIndex}`, disabled: disabled }))));
}
