import React from "react";
import styles from "../Styles/styles.module.scss";
import Accordion from "@cg-components/Accordion/Accordion";
import objectHasProperty from "@cg-utils/objectHasProperty";
export default function MobileTableBody({ columns, displayData, translations, mobileAccordionColumnKey, tBodyRef, onClickCellHandler }) {
    const renderRow = (item, rowIndex) => {
        const row = columns.map((column, colIndex) => {
            if (column.name === mobileAccordionColumnKey)
                return null;
            return (React.createElement("div", { key: `${column}-${colIndex}-${rowIndex}`, "data-testid": `table-body-cell-${colIndex}-${rowIndex}`, className: `${styles.mobileRow} `, onClick: () => {
                    if (onClickCellHandler) {
                        onClickCellHandler(item);
                    }
                } },
                React.createElement("div", { className: styles.mobileField }, column.label),
                React.createElement("div", { className: styles.mobileFieldValue }, item[column.name])));
        });
        return row;
    };
    const renderRows = () => displayData?.map((item, rowIndex) => {
        const column = columns.find((column) => column.name === mobileAccordionColumnKey);
        const title = objectHasProperty(item, mobileAccordionColumnKey) && column
            ? item[mobileAccordionColumnKey]
            : "Record";
        let titleElement = React.createElement(React.Fragment, null);
        if (title !== "Record" && column) {
            titleElement = (React.createElement("div", { className: `${styles.mobileRow} ` },
                React.createElement("div", { className: styles.mobileField }, column.label),
                React.createElement("div", null, item[column.name])));
        }
        else {
            // eslint-disable-next-line react/jsx-no-literals
            titleElement = React.createElement(React.Fragment, null, "Record");
        }
        return (React.createElement(Accordion, { title: titleElement, key: rowIndex },
            React.createElement("div", { className: styles.mobileAccordionCellContainer }, renderRow(item, rowIndex))));
    });
    if (!displayData || displayData.length < 1)
        return React.createElement("p", null, translations.notFound);
    return React.createElement("div", { ref: tBodyRef }, renderRows());
}
