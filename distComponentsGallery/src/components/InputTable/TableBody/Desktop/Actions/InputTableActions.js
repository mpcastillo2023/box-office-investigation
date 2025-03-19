import React from "react";
import styles from "../../../Styles/styles.module.scss";
import Trash from "@cg-icons/Trash.svg";
import Pencil from "@cg-icons/Pencil.svg";
import CrossCircle from "@cg-icons/CrossCircle.svg";
import CheckCircle from "@cg-icons/CheckCircle.svg";
export default function InputTableActions({ columns, rowIndex, activeIndex, onCancelHandler, onEditHandler, onRemoveHandler, onSaveHandler, disabled }) {
    const colIndex = columns.length;
    return (React.createElement("td", { key: `${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.cell} ${styles.center}` }, activeIndex === rowIndex ? (React.createElement("div", { className: styles.actionButtonsContainer },
        React.createElement("button", { onClick: () => onCancelHandler(rowIndex), className: styles.cancelButton, "aria-label": "cancel-change", disabled: disabled },
            React.createElement(CrossCircle, null)),
        React.createElement("button", { onClick: () => onSaveHandler(rowIndex), className: styles.confirmButton, "aria-label": "save-change", disabled: disabled },
            React.createElement(CheckCircle, null)))) : (React.createElement("div", { className: styles.actionButtonsContainer },
        React.createElement("button", { className: styles.transparentButtons, onClick: () => onRemoveHandler(rowIndex), "aria-label": "delete-row", disabled: disabled },
            React.createElement(Trash, null)),
        React.createElement("button", { className: styles.transparentButtons, onClick: () => onEditHandler(rowIndex), "aria-label": "edit-row", disabled: disabled },
            React.createElement(Pencil, null))))));
}
