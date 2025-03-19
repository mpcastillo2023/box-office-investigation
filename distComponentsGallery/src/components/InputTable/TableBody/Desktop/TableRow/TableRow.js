import React from "react";
import TableCell from "./TableCell";
export default function TableRow(props) {
    const { columns, customStyle } = props;
    return (React.createElement(React.Fragment, null, columns.map((column, colIndex) => {
        return (React.createElement(TableCell, { ...props, column: column, rowIndex: props.rowIndex, colIndex: colIndex, item: props.item, key: `${props.rowIndex}-${colIndex}`, customStyle: customStyle }));
    })));
}
