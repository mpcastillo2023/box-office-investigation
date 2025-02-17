import { Column, InputTableDataItem } from "@cg-components/InputTable/Types/Types";
import React from "react";
type Props = {
    column: Column;
    rowIndex: number;
    colIndex: number;
    activeIndex: number | null;
    withActionColumn: boolean;
    displayData: InputTableDataItem[];
    disabled: boolean;
    onChangeCellHandler: (value: string | boolean | number, rowIndex: number, field: string | number) => void;
    cellValue: string | boolean | number;
};
export default function TableCellInput({ column, colIndex, rowIndex, displayData, onChangeCellHandler, disabled, cellValue }: Props): React.JSX.Element;
export {};
