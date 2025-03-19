import React from "react";
import ListContainer from "./ListContainer/ListContainer";
import TwoWayArrows from "@cg-icons/TwoWayArrows.svg";
import styles from "../Styles/styles.module.scss";
export default function Columns({ customStyle, disabled = false, columns, activeItem, handleMoveAll }) {
    return (React.createElement("div", { className: styles.multipleListContainer, style: {
            opacity: disabled ? "0.7" : ""
        } }, columns.map((column, columnIndex) => {
        const idsOfItems = column.items.map((item) => item.id);
        const isLastColumn = columns.length - 1 === columnIndex;
        if (column.hidden)
            return null;
        return (React.createElement(React.Fragment, { key: columnIndex },
            React.createElement(ListContainer, { activeItem: activeItem, id: columnIndex, column: column, idsOfItems: idsOfItems, customStyle: customStyle, disabled: disabled, handleMoveAll: handleMoveAll }),
            isLastColumn ? null : (React.createElement("div", { className: styles.icon },
                React.createElement(TwoWayArrows, null)))));
    })));
}
