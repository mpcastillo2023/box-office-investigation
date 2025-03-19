import React from "react";
import TableCard from "./TableCard";
export default function TableRow(props) {
    const { columns } = props;
    return (React.createElement(React.Fragment, null, columns.map((column, colIndex) => {
        return (React.createElement(TableCard, { ...props, column: column, rowIndex: props.rowIndex, colIndex: colIndex, item: props.item, key: `${props.rowIndex}-${colIndex}` }));
    })));
}
