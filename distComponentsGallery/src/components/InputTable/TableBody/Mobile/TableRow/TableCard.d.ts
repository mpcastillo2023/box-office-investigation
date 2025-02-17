import React from "react";
import { Column, InputTableDataItem } from "@cg-components/InputTable/Types/Types";
type Props = {
    column: Column;
    rowIndex: number;
    colIndex: number;
    activeIndex: number | null;
    withActionColumn: boolean;
    displayData: InputTableDataItem[];
    item: InputTableDataItem;
    disabled: boolean;
    onChangeCellHandler: (value: string | boolean | number, rowIndex: number, field: string | number) => void;
};
export default function TableCard(props: Props): React.JSX.Element;
export {};
