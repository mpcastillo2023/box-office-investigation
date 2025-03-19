import React from "react";
import styles from "../../Styles/styles.module.scss";
import InputTableActions from "./Actions/InputTableActions";
import TableRow from "./TableRow/TableRow";
export default function MobileTableBody(props) {
    const { columns, displayData, withActionColumn = false, disabled, onCancelHandler, onChangeCellHandler, onEditHandler, onRemoveHandler, onSaveHandler, activeIndex, hiddenIndexes } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, displayData.map((item, rowIndex) => {
            if (hiddenIndexes.includes(rowIndex))
                return null;
            return (React.createElement("div", { className: styles.mobileCard, key: `${rowIndex}`, "data-testid": `table-body-row-${rowIndex}` },
                withActionColumn ? (React.createElement(InputTableActions, { columns: columns, rowIndex: rowIndex, activeIndex: activeIndex, onCancelHandler: onCancelHandler, onEditHandler: onEditHandler, onRemoveHandler: onRemoveHandler, onSaveHandler: onSaveHandler, disabled: disabled })) : null,
                React.createElement(TableRow, { withActionColumn: withActionColumn, activeIndex: activeIndex, displayData: displayData, rowIndex: rowIndex, onChangeCellHandler: onChangeCellHandler, item: item, columns: columns, disabled: disabled })));
        }))));
}
