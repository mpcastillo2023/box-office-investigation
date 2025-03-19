import React from "react";
import styles from "../../Styles/styles.module.scss";
import InputTableActions from "./Actions/InputTableActions";
import TableRow from "./TableRow/TableRow";
export default function DesktopTableBody(props) {
    const { columns, displayData, withActionColumn = false, disabled, onCancelHandler, onChangeCellHandler, onEditHandler, onRemoveHandler, onSaveHandler, activeIndex, hiddenIndexes, withCellBackground, isValidCellCallback, customStyle, onMouseEnterCallback, onMouseLeaveCallback, numberFormatCallBack } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("tbody", null, displayData.map((item, rowIndex) => {
            const isCellDisabled = disabled ||
                (typeof item.disabledCellInputTable !== "undefined" &&
                    item.disabledCellInputTable);
            if (hiddenIndexes.includes(rowIndex))
                return null;
            return (React.createElement("tr", { className: `${styles.cellRow} ${customStyle?.cellRow || ""}`, key: `${rowIndex}`, "data-testid": `table-body-row-${rowIndex}` },
                React.createElement(TableRow, { customStyle: customStyle, withActionColumn: withActionColumn, activeIndex: activeIndex, displayData: displayData, rowIndex: rowIndex, onChangeCellHandler: onChangeCellHandler, item: item, columns: columns, disabled: isCellDisabled, withCellBackground: withCellBackground, isValidCellCallback: isValidCellCallback, onMouseEnterCallback: onMouseEnterCallback, onMouseLeaveCallback: onMouseLeaveCallback, numberFormatCallBack: numberFormatCallBack }),
                withActionColumn && !isCellDisabled ? (React.createElement(InputTableActions, { columns: columns, rowIndex: rowIndex, activeIndex: activeIndex, onCancelHandler: onCancelHandler, onEditHandler: onEditHandler, onRemoveHandler: onRemoveHandler, onSaveHandler: onSaveHandler, disabled: isCellDisabled, withCellBackground: withCellBackground })) : null));
        }))));
}
