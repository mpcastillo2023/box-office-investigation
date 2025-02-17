import React from "react";
import { TransferlistItemColumns } from "../Types/Types";
type Props = {
    onChange: (columns: TransferlistItemColumns) => void;
    checkedItems: TransferlistItemColumns;
    setCheckedItems: React.Dispatch<React.SetStateAction<TransferlistItemColumns>>;
    defaultValue?: TransferlistItemColumns;
    value?: TransferlistItemColumns;
    disabled: boolean;
};
type FromTo = {
    from: keyof TransferlistItemColumns;
    to: keyof TransferlistItemColumns;
};
type FromToIndex = FromTo & {
    index: number;
};
export default function UseColumns({ onChange, checkedItems, setCheckedItems, defaultValue, value }: Props): {
    moveAllItemsFromTo: ({ from, to }: FromTo) => void;
    moveCheckedItems: ({ from, to }: FromTo) => void;
    columns: TransferlistItemColumns;
    moveItem: ({ from, to, index }: FromToIndex) => void;
};
export {};
