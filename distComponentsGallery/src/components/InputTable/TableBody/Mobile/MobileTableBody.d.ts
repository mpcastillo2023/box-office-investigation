import React from "react";
import { Column, InputTableDataItem } from "../../Types/Types";
type Props = {
    columns: Column[];
    displayData: InputTableDataItem[];
    withActionColumn?: boolean;
    disabled: boolean;
    isValidSaveCallback?: (newItem: InputTableDataItem) => boolean | Promise<boolean>;
    onCancelHandler: (rowIndex: number) => void;
    onEditHandler: (rowIndex: number) => void;
    onRemoveHandler: (rowIndex: number) => void;
    onChangeCellHandler: (value: string | boolean | number, rowIndex: number, field: string | number) => void;
    onSaveHandler: (rowIndex: number) => Promise<void>;
    activeIndex: number | null;
    hiddenIndexes: number[];
};
export default function MobileTableBody(props: Props): React.JSX.Element;
export {};
