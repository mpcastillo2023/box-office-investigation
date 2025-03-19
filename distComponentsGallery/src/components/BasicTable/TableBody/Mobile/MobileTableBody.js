import React from "react";
import styles from "../../Styles/styles.module.scss";
export default function MobileTableBody({ columns, displayData, onClickCellHandler }) {
    const renderRow = (item, rowIndex) => {
        const row = columns.map((column, colIndex) => {
            return (React.createElement("div", { key: `${column}-${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.mobileRow} `, onClick: () => {
                    if (onClickCellHandler)
                        onClickCellHandler(item);
                } },
                React.createElement("div", { className: styles.mobileField }, column.label),
                React.createElement("div", { className: styles.mobileFieldValue }, item[column.name])));
        });
        return row;
    };
    const renderRows = () => displayData?.map((item, rowIndex) => {
        return (React.createElement("div", { key: rowIndex, className: styles.mobileCard }, renderRow(item, rowIndex)));
    });
    return renderRows();
}
