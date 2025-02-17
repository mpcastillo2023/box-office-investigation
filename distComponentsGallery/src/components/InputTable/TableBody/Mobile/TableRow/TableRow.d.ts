import { Column, InputTableDataItem } from "@cg-components/InputTable/Types/Types";
import React from "react";
type Props = {
    columns: Column[];
    rowIndex: number;
    item: InputTableDataItem;
    activeIndex: number | null;
    withActionColumn: boolean;
    displayData: InputTableDataItem[];
    disabled: boolean;
    onChangeCellHandler: (value: string | boolean | number, rowIndex: number, field: string | number) => void;
};
export default function TableRow(props: Props): React.JSX.Element;
export {};
